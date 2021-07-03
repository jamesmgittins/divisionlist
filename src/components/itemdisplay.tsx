import React from "react";
import { Item, Rarity } from "../data/items";
import { setOwned } from "../data/store";

export class ItemDisplay extends React.Component<any, any> {
    item: Item;
    owned: boolean;

    constructor(props: any) {
        super(props);
        this.handleItemClicked = this.handleItemClicked.bind(this);
        this.item = props.item;
        this.owned = props.owned;
        this.state = {open:false};
    }

    handleButtonClicked(item: Item, owned: boolean) {
        setOwned(item, !owned);
        this.props.onListChange();
    }

    handleItemClicked() {
        this.setState({open : !this.state.open});
    }

    render() {
        return (
            <div className={`item ${this.item.rarity === Rarity.exotic ? 'exotic' : 'highend'} ${this.state.open ? 'open' : ''}`}>
                <div className="title" onClick={this.handleItemClicked}>
                    <p className="name">{this.item.name}</p>
                    <p className="rarity">{this.item.rarity === Rarity.exotic ? 'Exotic' : 'High-End'}</p>
                    <p className="type">{this.item.type}</p>
                    <button className={this.owned ? 'owned' : 'needed'} onClick={(e) => this.handleButtonClicked(this.item, this.owned)}>
                        {
                            this.owned ? 
                            <span>&#x2718;</span> :
                            <span>&#x2714;</span>
                        }
                    </button>
                    {
                        this.state.open ? <span className="arrow">&#x2F0;</span> : <span className="arrow">&#x2EF;</span>
                    }
                </div>
                <div className="hover">
                    <pre>{this.item.talent}</pre>
                    <pre>Attributes:<br/>{this.item.attributes}</pre>
                    <pre>Mods:<br/>{this.item.mods}</pre>
                    <pre>Source:<br/>{this.item.uniqueSource}</pre>
                    <pre>Alternate Source:<br/>{this.item.alternateSource}</pre>
                </div>
            </div>
        );
    }
}