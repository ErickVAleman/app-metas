import React, { Component } from 'react'
import Layout from '../components/Layout';

class Index extends Component {
    state={
        drawerState: false
    }
    onSwichState = () => {
        this.setState({drawerState:!this.state.drawerState})
    }
    render() {
        return (
            <div>
                <Layout appTitle='Meta Diaria' >
                    <ul>
                        <li>Nombre de la tienda</li>
                        <li>Timer para llegar a la meta</li>
                        <li>grafico de estadisticas</li>
                    </ul>
                </Layout>
            </div>
        )
    }
}

export default Index
