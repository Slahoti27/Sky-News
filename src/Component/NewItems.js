import React, { Component } from 'react'

export class NewItems extends Component {
  render() {
    let {title, Description, ImageUrl, NewsUrl, author, date} = this.props;
    return (
      
      <div className='my-3'>
      <div className="card" >
      <img src={!ImageUrl ? "https://images.livemint.com/img/2022/09/24/600x338/flipkart_big_billion_days_1663073829131_1664014900248_1664014900248.png" : ImageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{Description}...</p>
        <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
        <a rel="noreferrer" href={NewsUrl} target="_blank" className="btn btn-dark">Read More</a>
      </div>
    </div>
    </div>
    )
  }
}

export default NewItems