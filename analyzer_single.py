import sys
from bs4 import BeautifulSoup

filename = sys.argv[1]
with open(filename, 'r') as f:
    soup = BeautifulSoup(f, 'html.parser')
    print(f"--- Analyzing {filename} ---")
    
    print("Videos:")
    for video in soup.find_all(['iframe', 'video']):
        print(f"  Source: {video.get('src') or video.get('data-src')}")
        for source in video.find_all('source'):
            print(f"  Source: {source.get('src')}")
    
    print("Social Links:")
    social_keywords = ['facebook', 'twitter', 'linkedin', 'instagram', 'youtube']
    for a in soup.find_all('a', href=True):
        href = a['href']
        if any(keyword in href.lower() for keyword in social_keywords):
            print(f"  Link: {href}")
            
    print("Maps:")
    for iframe in soup.find_all('iframe'):
        src = iframe.get('src', '')
        if 'google.com/maps' in src:
            print(f"  Map Source: {src}")
    
    print("Forms:")
    for form in soup.find_all('form'):
        print(f"  Form Action: {form.get('action')}")
        for field in form.find_all(['input', 'textarea', 'select']):
            print(f"    Field: {field.get('name')} ({field.get('type')})")
            
    print("Certificates/Downloads:")
    for a in soup.find_all('a', href=True):
        href = a['href']
        if any(ext in href.lower() for ext in ['.pdf', '.doc', '.docx', '.zip']):
            print(f"  Download: {href} (Label: {a.get_text().strip()})")
