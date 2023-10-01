import styles from "./Table.module.css";

function Table({ forecasts}) {
    console.log(forecasts)

    return (
      <div>
        <table className={styles.table}>
        <thead>
          <tr>
            <th>Forecast</th>
            <th>Temperature(Day High)</th>
          </tr>
        </thead>
        {forecasts.length == 4 && 
        <tbody>
            <tr>
                <td>{forecasts[0].forecast}</td>
                <td>{forecasts[0].temperature.high}</td>
            </tr>
            <tr>
                <td>{forecasts[1].forecast}</td>
                <td>{forecasts[1].temperature.high}</td>
            </tr>
            <tr>
                <td>{forecasts[2].forecast}</td>
                <td>{forecasts[2].temperature.high}</td>
            </tr>
            <tr>
                <td>{forecasts[3].forecast}</td>
                <td>{forecasts[3].temperature.high}</td>
            </tr>
              {/* {forecasts.length > 0 && forecasts.map((item) =>{
                <tr>
                    <td>{console.log(item.forecast)}</td>
                    <td>{console.log(item.temperature.high)}</td>
                </tr>
              })} */}
        </tbody>}
        </table>
      </div>
    );
  }
  export default Table;