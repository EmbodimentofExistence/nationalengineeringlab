from bs4 import BeautifulSoup
import os

files = ['homepage.html', 'about.html', 'blog.html', 'contact.html']

for file in files:
    print(f"--- Analyzing {file} ---")
    if not os.path.exists(file):
        print("File not found.")
        continue
    
    with open(file, 'r') as f:
        soup = BeautifulSoup(f, 'html.parser')
        
        # 1. Videos (iframe, video tags)
        print("Videos:")
        for video in soup.find_all(['iframe', 'video']):
            print(f"  Source: {video.get('src') or video.get('data-src')}")
        
        # 2. Galleries (look for common gallery classes or repetitive image patterns)
        print("Potential Gallery Images:")
        for img in soup.find_all('img'):
            src = img.get('src')
            if src and ('gallery' in src.lower() or 'upload' in src.lower()):
                 # Filter out icons/logos if possible, but for now just print
                 print(f"  Image: {src}")
        
        # 3. Social links
        print("Social Links:")
        social_keywords = ['facebook', 'twitter', 'linkedin', 'instagram', 'youtube']
        for a in soup.find_all('a', href=True):
            href = a['href']
            if any(keyword in href.lower() for keyword in social_keywords):
                print(f"  Link: {href}")
        
        # 4. FAQs (look for 'FAQ', 'Frequently Asked Questions', or accordion structures)
        print("FAQ related content:")
        faq_text = soup.find_all(string=lambda text: 'faq' in text.lower() or 'question' in text.lower())
        for text in faq_text:
            print(f"  Text: {text.strip()}")
            
        # 5. Maps
        print("Maps:")
        for iframe in soup.find_all('iframe'):
            src = iframe.get('src', '')
            if 'google.com/maps' in src:
                print(f"  Map Source: {src}")
        
        # 6. Service details
        print("Service keywords:")
        services = soup.find_all(string=lambda text: 'service' in text.lower() or 'test' in text.lower())
        for text in services[:10]: # Limit to avoid bloat
            print(f"  Service-related: {text.strip()}")
            
        # 7. Forms
        print("Forms:")
        for form in soup.find_all('form'):
            print(f"  Form Action: {form.get('action')}")
            for field in form.find_all(['input', 'textarea', 'select']):
                print(f"    Field: {field.get('name')} ({field.get('type')})")
        
        # 8. Downloadable certificates
        print("Certificates/Downloads:")
        for a in soup.find_all('a', href=True):
            href = a['href']
            if any(ext in href.lower() for ext in ['.pdf', '.doc', '.docx', '.zip']):
                print(f"  Download: {href} (Label: {a.get_text().strip()})")

