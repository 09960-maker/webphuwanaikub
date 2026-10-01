"""รวมทุกไฟล์เป็น HTML ไฟล์เดียวสำหรับแจกหรือทดลอง: python tools/bundle.py > demo.html"""
import re,os
root=os.path.join(os.path.dirname(__file__),'..')
h=open(os.path.join(root,'index.html'),encoding='utf8').read()
rd=lambda p:open(os.path.join(root,p),encoding='utf8').read()
h=re.sub(r'<link rel="stylesheet" href="(css/[^"]+)">',lambda m:'<style>'+rd(m.group(1))+'</style>',h)
h=re.sub(r'<script src="(js/[^"]+)"></script>',lambda m:'<script>'+rd(m.group(1))+'</script>',h)
print(h)
