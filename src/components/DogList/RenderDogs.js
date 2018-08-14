import React from 'react';
import GetDogs from './GetDogs';
import './RenderDogs.css';

const API = `https://data.austintexas.gov/resource/`;
const DEFAULT_QUERY = 'h8x4-nvyi.json/';

export const RenderDogs = () =>

<GetDogs url={API + DEFAULT_QUERY}>
    {({ data, isLoading, error }) => {
      if (!data) {
        return <p>No data yet ...</p>;
      }

      if (error) {
        return <p>{error.message}</p>;
      }

      if (isLoading) {
        return <p>Loading ...</p>;
      }

      let itemKey = 0;

      return (
        <section className="main-wrapper">
          {data.map(dogInfo =>
            <div className="dog-info" key={ itemKey++ }>
              <p>Dog Description: { dogInfo.description_of_dog }</p>
              <p>Owner: { dogInfo.first_name } { dogInfo.last_name }</p>
              <p>Address: { dogInfo.address }</p>
              {/* <button className="dog-info--button">View Details</button> */}
            </div>
          )}
        </section>
      );
    }}
  </GetDogs>

export default RenderDogs