class ProgressBar {
    constructor({
      parent = null,
      width = '100%',
      height = '20px',
      backgroundColor = '#e0e0e0',
      fillColor = '#76c7c0',
      borderRadius = '5px',
      maxValue = 100,
      value = 0,
      showText = true,
      animationSpeed = 500
    } = {}) {
      this.width = width;
      this.height = height;
      this.backgroundColor = backgroundColor;
      this.fillColor = fillColor;
      this.borderRadius = borderRadius;
      this.maxValue = maxValue;
      this.value = value;
      this.showText = showText;
      this.animationSpeed = animationSpeed;
      this.progressBar = this.createProgressBar();
  
      if (parent) {
        this.attachTo(parent);
      }
    }
  
    createProgressBar() {
      const container = document.createElement('div');
      container.style.width = this.width;
      container.style.height = this.height;
      container.style.backgroundColor = this.backgroundColor;
      container.style.borderRadius = this.borderRadius;
      container.style.position = 'relative';
      container.style.overflow = 'hidden';
  
      const fill = document.createElement('div');
      fill.style.width = '0%';
      fill.style.height = '100%';
      fill.style.transition = `width ${this.animationSpeed}ms ease-in-out`;
      this.applyFillColor(fill);
      container.appendChild(fill);
  
      if (this.showText) {
        const text = document.createElement('span');
        text.style.position = 'absolute';
        text.style.width = '100%';
        text.style.textAlign = 'center';
        text.style.top = '50%';
        text.style.transform = 'translateY(-50%)';
        text.style.fontSize = '14px';
        container.appendChild(text);
        this.textElement = text;
      }
  
      this.fillElement = fill;
      this.update(this.value);
      return container;
    }
  
    applyFillColor(fill) {
      const animations = {
        multicolor: 'multicolorAnimation 8s infinite linear',
        pulse: 'pulseAnimation 4s infinite alternate',
        wave: 'waveAnimation 6s infinite linear',
        fire: 'fireAnimation 6s infinite linear',
        ocean: 'oceanAnimation 6s infinite linear',
        neon: 'neonAnimation 6s infinite linear',
        fade: 'fade 2s infinite linear'
      };
  
      if (animations[this.fillColor]) {
        fill.style.animation = animations[this.fillColor];
        this.injectKeyframes(`
          @keyframes multicolorAnimation {
            0% { background: linear-gradient(45deg, #ff0057, #e64a19, #fbc02d, #00bcd4, #8bc34a, #ff0057); background-size: 600% 600%; background-position: 0% 50%; }
            100% { background: linear-gradient(45deg, #ff0057, #e64a19, #fbc02d, #00bcd4, #8bc34a, #ff0057); background-size: 600% 600%; background-position: -600% 50%; }
  
            }
          @keyframes pulseAnimation {
            0% { background-color: #76c7c0; }
            100% { background-color: #ff4500; }
          }
          @keyframes waveAnimation {
            0% { background: url(https://gist.githubusercontent.com/ratnabh/da8213a27700e0e1c2d1c81961070f6f/raw/3608a5072f4e392b852e5cc3c244841025b32c81/wave1.svg) repeat-x; background-size: 170% 170%; background-position: 0% 50%; }
            100% { background: url(https://gist.githubusercontent.com/ratnabh/da8213a27700e0e1c2d1c81961070f6f/raw/3608a5072f4e392b852e5cc3c244841025b32c81/wave1.svg) repeat-x; background-size: 170% 170%; background-position: -600% 50%; }
  
          }
          @keyframes fireAnimation {
            0% { background: linear-gradient(0deg, #ffee00, #ff0000, #ff00ff); background-position:50% 0% }
            50% { background: linear-gradient(0deg, #ffee00, #ff0000, #ff00ff); background-position:50% 100% }
            100% { background: linear-gradient(0deg, #ffee00, #ff0000, #ff00ff); background-position:50% 0% }
          }
          @keyframes oceanAnimation {
            0% { background: #0000ff; }
            50% { background: #00ffff; }
            100% { background: #0000ff; }
          }
          @keyframes neonAnimation {
              0% { background: url(https://raw.githubusercontent.com/ArturoTF/ArturoTFProgressBar/refs/heads/develop/img/neon.jpg) repeat-x; background-size: 100% 100%; background-position: 0% 50%; }
            100% { background: url(https://raw.githubusercontent.com/ArturoTF/ArturoTFProgressBar/refs/heads/develop/img/neon.jpg) repeat-x; background-size: 100% 100%; background-position: -600% 50%; }
  
            }
          @keyframes fade {
            0% { background: linear-gradient(90deg, #da3287, #ffde5e, #da3287, #ffde5e); background-size: 300% 100%; background-position: 0 0; }
            100% { background: linear-gradient(90deg, #da3287, #ffde5e, #da3287, #ffde5e); background-size: 300% 100%; background-position: 100% 0;}
          }
        `);
      } else {
        fill.style.backgroundColor = this.fillColor;
      }
    }
  
    injectKeyframes(styles) {
      const styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      styleSheet.innerHTML = styles;
      document.head.appendChild(styleSheet);
    }
  
    update(value) {
      this.value = Math.max(0, Math.min(value, this.maxValue));
      const percentage = (this.value / this.maxValue) * 100;
      this.fillElement.style.width = `${percentage}%`;
      if (this.showText) {
        this.textElement.innerText = `${Math.round(percentage)}%`;
      }
    }
  
    attachTo(parent) {
      if (typeof parent === 'string') {
        document.querySelector(parent).appendChild(this.progressBar);
      } else {
        parent.appendChild(this.progressBar);
      }
    }
  }