import React, { Component } from 'react';

class Clientscomponent extends Component {
  render() {
    return (
    	<div className="container Client-table">
          <table>
          	<tbody>
          		<tr>
					<th>Time</th>
				    <th>Client</th>
				    <th>Stylist</th>
				</tr>
	            <tr>
	            	<td>8:00am</td>
	            	<td>Isaac R.</td>
	            	<td>George</td>
	            </tr>
	            <tr>
	            	<td>8:15am</td>
	            	<td>Ashley S.</td>
	            	<td>John</td>
	            </tr>
	            <tr>
	            	<td>8:30am</td>
	            	<td>Paul K.</td>
	            	<td>Tak</td>
	            </tr>
            </tbody>
          </table>
        </div>
    );
   }
}


export default Clientscomponent;