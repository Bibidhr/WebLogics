import re

with open(r'C:\Users\user\.gemini\antigravity\brain\12ed8b7a-fe5e-4774-bacf-e1b784fe9819\.system_generated\steps\117\content.md', 'r', encoding='utf-8') as f:
    html = f.read()

# Very basic strip tags
text = re.sub(r'<style[^>]*>[\s\S]*?</style>', '', html)
text = re.sub(r'<script[^>]*>[\s\S]*?</script>', '', text)
text = re.sub(r'<[^>]+>', ' ', text)
text = re.sub(r'\s+', ' ', text)

print(text[:3000])
