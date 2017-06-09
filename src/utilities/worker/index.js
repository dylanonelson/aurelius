import autobind from 'autobind-decorator';

class Worker {
  constructor(restartInterval = 2000) {
    this.restartInterval = restartInterval;
  }

  hasUncompletedTasks() {
    return this.queue.length > 0;
  }

  interval = null;

  @autobind
  restart() {
    this.interval = null;
    let f;
    while (this.queue.length > 0) {
      f = this.queue.shift();
      if (typeof f === 'function') requestAnimationFrame(f);
    }
  }

  @autobind
  schedule(f) {
    this.queue.push(f);
    this.resetInterval();
  }

  resetInterval() {
    if (this.interval !== null) clearTimeout(this.interval);
    this.interval = setTimeout(this.restart, this.restartInterval);
  }

  pause() {
    this.resetInterval();
  }

  queue = [];
}

export default Worker;
