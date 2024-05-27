export function loadScript(src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }
  
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
      script.defer = true;
  
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
  
      document.body.appendChild(script);
    });
  }
  
  export function unloadScript(src) {
    const script = document.querySelector(`script[src="${src}"]`);
    if (script) {
      script.remove();
    }
  }
  