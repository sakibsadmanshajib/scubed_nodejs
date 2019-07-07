class Scrooth {
  constructor({element = window, strength=10, acceleration = 1.2,deceleration = 0.937}={}) {
    this.element = element;
    this.distance = strength;
    this.acceleration = acceleration;
    this.deceleration = deceleration;
    this.running = false;

    this.element.addEventListener('wheel', this.scrollHandler.bind(this));
    this.element.addEventListener('mousewheel', this.scrollHandler.bind(this));
    this.scroll = this.scroll.bind(this);
  }

  scrollHandler(e) {
    e.preventDefault();

    if (!this.running) {
      this.top = this.element.pageYOffset || this.element.scrollTop || 0;
      this.running = true;
      this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
      this.isDistanceAsc = true;
      this.scroll();
    } else {
      this.isDistanceAsc = false;
      this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
    }
  }

  scroll() {
    if (this.running) {
      this.currentDistance *= this.isDistanceAsc === true ? this.acceleration : this.deceleration;
      if (Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false){
        this.running = false
      }
      //Math.abs(this.currentDistance) >= Math.abs(this.distance) ? this.isDistanceAsc = false : 1;
      if(Math.abs(this.currentDistance) >= Math.abs(this.distance)){
        this.isDistanceAsc = false
      }

      this.top += this.currentDistance;
      this.element.scrollTo(0, this.top);

      requestAnimationFrame(this.scroll);
    }
  }
}

export default Scrooth;

//const body = new Scrooth();
