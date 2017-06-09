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

    const performTask = () => {
      const f = this.queue.shift();
      if (typeof f === 'function') f();

      if (this.queue.length > 0 && this.interval === null)
        requestAnimationFrame(performTask);
    };

    performTask();
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
