import React from 'react';
import { ItemList } from './components/itemlist';
import { exotics } from './data/exotics';
import { getStorage, isOwned } from './data/store';

export class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.handleOwnedChange = this.handleOwnedChange.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.state = {
      ownedItems: getStorage(),
      tab : 'needed'
    }
  }

  handleOwnedChange() {
    this.setState({
      ownedItems: getStorage()
    });
  }

  handleTabChange(tabSelected : string) {
    this.setState({
      ownedItems : getStorage(),
      tab : tabSelected
    });
  }

  render() {
    let needed = exotics.filter(e => !isOwned(e)).length;
    let owned = exotics.filter(e => isOwned(e)).length;
    return (
      <div>
        <div className="visible-xs">
          <div className="tab-columns">
            <button className={`tab ${this.state.tab === 'needed' ? 'active' : ''}`} onClick={(e) => this.handleTabChange('needed')}>Needed ({needed})</button>
            <button className={`tab ${this.state.tab === 'owned' ? 'active' : ''}`} onClick={(e) => this.handleTabChange('owned')}>Owned ({owned})</button>
          </div>
        </div>
        <div className="columns">
          <div className={`column ${this.state.tab === 'needed' ? '' : 'hidden-xs'}`}>
            <h2 className="hidden-xs">Needed ({needed})</h2>
            <ItemList owned={false} onListChange={this.handleOwnedChange}/>
          </div>
          <div className={`column ${this.state.tab === 'owned' ? '' : 'hidden-xs'}`}>
            <h2 className="hidden-xs">Owned ({owned})</h2>
            <ItemList owned={true} onListChange={this.handleOwnedChange} />
          </div>
        </div>
      </div>
    );
  }
}
