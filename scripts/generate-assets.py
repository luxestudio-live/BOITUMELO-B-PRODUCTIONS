import os
import base64
import shutil
from PIL import Image

src_path = r'C:/Users/Sonali/.gemini/antigravity/brain/e07e9021-85f2-41c8-a2cd-097668673b98/.user_uploaded/media_1794916960780_1f9fd386.jpg'
img = Image.open(src_path).convert('RGB')

# Bounding box of artwork:
# X: 51 to 993, Y: 265 to 450
pad_x = 12
pad_y = 12
crop_box = (max(0, 51 - pad_x), max(0, 265 - pad_y), min(img.width, 993 + pad_x), min(img.height, 450 + pad_y))
cropped = img.crop(crop_box)
w, h = cropped.size

# 1. logo-white-bg.png
os.makedirs('public/images', exist_ok=True)
cropped.save('public/images/logo-white-bg.png', 'PNG')

# 2. logo.png (Transparent background, suitable for white/light navbar)
rgba = Image.new('RGBA', (w, h), (0, 0, 0, 0))
src_pix = cropped.load()
dst_pix = rgba.load()

for y in range(h):
    for x in range(w):
        r, g, b = src_pix[x, y]
        diff = max(255 - r, 255 - g, 255 - b)
        if diff <= 6:
            dst_pix[x, y] = (0, 0, 0, 0)
        else:
            alpha_f = min(1.0, diff / 170.0)
            alpha = int(alpha_f * 255)
            if alpha_f > 0.02:
                un_r = int(max(0, min(255, 255 - (255 - r) / alpha_f)))
                un_g = int(max(0, min(255, 255 - (255 - g) / alpha_f)))
                un_b = int(max(0, min(255, 255 - (255 - b) / alpha_f)))
            else:
                un_r, un_g, un_b = r, g, b
            dst_pix[x, y] = (un_r, un_g, un_b, alpha)

rgba.save('public/images/logo.png', 'PNG')

# 3. logo-dark.png (Inverted white text for dark footer & hero overlays, with gold pill contour)
dark_rgba = Image.new('RGBA', (w, h), (0, 0, 0, 0))
dark_dst = dark_rgba.load()

is_in_pill = [[False]*h for _ in range(w)]
for y in range(h):
    for x in range(w):
        r, g, b = src_pix[x, y]
        diff = max(255 - r, 255 - g, 255 - b)
        if y >= 90 and x >= 420 and diff > 10:
            is_in_pill[x][y] = True

is_pill_edge = [[False]*h for _ in range(w)]
for y in range(1, h-1):
    for x in range(1, w-1):
        if is_in_pill[x][y]:
            if not (is_in_pill[x-1][y] and is_in_pill[x+1][y] and is_in_pill[x][y-1] and is_in_pill[x][y+1]):
                is_pill_edge[x][y] = True

gold_border = (176, 141, 87) # #B08D57

for y in range(h):
    for x in range(w):
        r, g, b = src_pix[x, y]
        diff = max(255 - r, 255 - g, 255 - b)
        if diff <= 6:
            continue
        
        is_gold = (r > 130 and g > 80 and b < 120 and r > b + 30)
        is_black_text = (r < 75 and g < 75 and b < 75 and y < 95)
        in_pill = is_in_pill[x][y]

        if is_black_text:
            alpha_f = min(1.0, diff / 190.0)
            dark_dst[x, y] = (255, 255, 255, int(alpha_f * 255))
        elif is_gold:
            alpha_f = min(1.0, diff / 160.0)
            dark_dst[x, y] = (r, g, b, int(alpha_f * 255))
        elif in_pill:
            if is_pill_edge[x][y]:
                dark_dst[x, y] = (gold_border[0], gold_border[1], gold_border[2], 240)
            elif r > 180 and g > 180 and b > 180:
                dark_dst[x, y] = (255, 255, 255, 255)
            else:
                alpha_f = min(1.0, diff / 200.0)
                dark_dst[x, y] = (25, 47, 53, int(alpha_f * 255))
        else:
            alpha_f = min(1.0, diff / 170.0)
            dark_dst[x, y] = (r, g, b, int(alpha_f * 255))

dark_rgba.save('public/images/logo-dark.png', 'PNG')

# 4. logo-mark.png (Golden B gesture mark isolated)
mark = rgba.crop((0, 10, 460, 200))
mark.save('public/images/logo-mark.png', 'PNG')

# 5. Square app icons: 512, 192, 180 (apple-touch-icon)
icon_512 = Image.new('RGBA', (512, 512), (11, 19, 32, 255))
target_w = 420
scale = target_w / mark.width
target_h = int(mark.height * scale)
mark_scaled = mark.resize((target_w, target_h), Image.Resampling.LANCZOS)
pos_x = (512 - target_w) // 2
pos_y = (512 - target_h) // 2
icon_512.paste(mark_scaled, (pos_x, pos_y), mark_scaled)
icon_512.save('public/icon-512.png', 'PNG')

icon_192 = icon_512.resize((192, 192), Image.Resampling.LANCZOS)
icon_192.save('public/icon-192.png', 'PNG')

icon_180 = icon_512.resize((180, 180), Image.Resampling.LANCZOS)
icon_180.save('public/apple-touch-icon.png', 'PNG')

# Multi-resolution favicon.ico
icon_512.save('public/favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])
os.makedirs('app', exist_ok=True)
shutil.copyfile('public/favicon.ico', 'app/favicon.ico')

# 6. SVG icon
with open('public/icon-512.png', 'rb') as f:
    b64 = base64.b64encode(f.read()).decode('utf-8')

svg_str = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="goldFrame" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E8DCC3" />
      <stop offset="50%" stop-color="#B08D57" />
      <stop offset="100%" stop-color="#8A6A2F" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="96" fill="#0B1320" />
  <rect x="20" y="20" width="472" height="472" rx="80" fill="none" stroke="url(#goldFrame)" stroke-width="2.5" opacity="0.6" />
  <path d="M 52 112 L 52 52 L 112 52" fill="none" stroke="#B08D57" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M 400 52 L 460 52 L 460 112" fill="none" stroke="#B08D57" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M 52 400 L 52 460 L 112 460" fill="none" stroke="#B08D57" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M 400 460 L 460 460 L 460 400" fill="none" stroke="#B08D57" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
  <circle cx="436" cy="76" r="8" fill="#FF4D4D" />
  <image href="data:image/png;base64,{b64}" x="0" y="0" width="512" height="512" preserveAspectRatio="xMidYMid meet" />
</svg>'''

with open('public/icon.svg', 'w', encoding='utf-8') as f:
    f.write(svg_str)

shutil.copyfile('public/icon.svg', 'app/icon.svg')

print('All brand assets and favicons successfully generated!')
