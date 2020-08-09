import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {
    state= {
        rows: []
    }

    async componentDidMount(){
        try {
            const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
            console.log(res.data.results)
            this.setState({rows: res.data.results})

        } catch (error) { console.error(error) }
    }
    
    render() {
        return (
            <div>
                <p>This is a poke-table</p>
                <table>
                    <tr className='tableheader'>
                        <th>Name</th>
                        <th>url</th>
                    </tr>
                    
                    {this.state.rows.map(row => (
                      <tr>
                          <td>{row.name}</td>
                          <td>{row.url}</td>
                      </tr>
                    ))}
                </table>
            </div>
        )
    }
}

export default Home