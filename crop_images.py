import sys
from PIL import Image

try:
    img_path = r"C:\Users\user\.gemini\antigravity\brain\12ed8b7a-fe5e-4774-bacf-e1b784fe9819\media__1782185207534.png"
    img = Image.open(img_path)
    w, h = img.size
    print(f"Image loaded: {w}x{h}")
    
    col_w = w / 3
    row_h = h / 2
    
    out_names = [
        ["portfolio_garage.png", "portfolio_sarees.png", "portfolio_mags.png"],
        ["portfolio_city_security.png", "portfolio_sleepy.png", "portfolio_aesthetic.png"]
    ]
    
    for r in range(2):
        for c in range(3):
            left = c * col_w
            top = r * row_h
            right = (c + 1) * col_w
            
            # Crop the upper 80% to exclude the name label text in the black bar
            bottom = top + row_h * 0.80
            
            box = (int(left), int(top), int(right), int(bottom))
            cropped = img.crop(box)
            
            out_path = rf"C:\Users\user\Documents\New\public\{out_names[r][c]}"
            cropped.save(out_path)
            print(f"Saved {out_names[r][c]} (cropped screenshot) to {out_path}")
            
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
