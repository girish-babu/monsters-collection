import React, { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='card-list'>
                {
                    this.props.monsters.map(monster => (
                        <Card key={monster.id} monster={monster} />
                    ))
                }
            </div>
        );
    }
}

export default CardList;