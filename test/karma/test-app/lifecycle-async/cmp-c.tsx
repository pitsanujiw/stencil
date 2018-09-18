import { Component, Event, EventEmitter, Prop, State } from '../../../../dist';
import { timeout } from './util';

@Component({
  tag: 'lifecycle-async-c'
})
export class LifecycleAsyncC {

  @Prop() value = '';
  @State() rendered = 0;

  @Event() lifecycleLoad: EventEmitter;
  @Event() lifecycleUpdate: EventEmitter;


  async componentWillLoad() {
    this.lifecycleLoad.emit('componentWillLoad-c');
    await timeout(1000);
  }

  async componentDidLoad() {
    this.lifecycleLoad.emit('componentDidLoad-c');
  }

  async componentWillUpdate() {
    this.lifecycleUpdate.emit('componentWillUpdate-c');
    await timeout(100);
  }

  async componentDidUpdate() {
    this.lifecycleUpdate.emit('componentDidUpdate-c');
    await timeout(100);
  }

  render() {
    this.rendered++;

    return (
      <div>
        <hr/>
        <div>
          LifecycleAsyncC {this.value}
        </div>
        <div class='rendered-c'>
          rendered c: {this.rendered}
        </div>
      </div>
    );
  }
}
