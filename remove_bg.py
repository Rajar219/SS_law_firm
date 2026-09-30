from PIL import Image

def remove_black_background(input_path, output_path, threshold=20):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    for item in data:
        # Get RGB values
        r, g, b, a = item
        
        # Calculate grayscale intensity
        intensity = (r + g + b) / 3
        
        if intensity < threshold:
            # Black or very dark pixels become fully transparent
            new_data.append((r, g, b, 0))
        elif intensity < threshold + 30:
            # Semi-transparent for smooth edges
            alpha = int((intensity - threshold) / 30 * 255)
            new_data.append((r, g, b, alpha))
        else:
            # Keep original
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Saved transparent logo to {output_path}")

remove_black_background('public/logo.png', 'public/logo_transparent.png')
