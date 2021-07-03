import React from "react";
import { exotics } from "../data/exotics";
import { isOwned } from "../data/store";
import { ItemDisplay } from "./itemdisplay";

export class ItemList extends React.Component<any,any> {

    exotics = exotics;
    owned : boolean;

    constructor(props : any) {
        super(props);
        this.owned = props.owned;
    }

    render() {
        let filteredList = this.owned ? exotics.filter(e => isOwned(e)) : exotics.filter(e => !isOwned(e));
        let exoticsList = filteredList.map((item,index) => {
            return (<ItemDisplay item={item} owned={this.owned} onListChange={this.props.onListChange} key={item.name} />)
        });
        return (
            <div>
                {exoticsList}
            </div>
        );
    }
}