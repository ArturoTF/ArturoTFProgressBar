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
      fill.style.backgroundColor = this.fillColor;
      fill.style.transition = `width ${this.animationSpeed}ms ease-in-out`;
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