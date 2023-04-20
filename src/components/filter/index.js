import { useDispatch } from 'react-redux';
import {
  handleInputChange,
  handleStatusChange,
  handleSortChange,
  handleReset,
} from '../../app/jobSlice';

const Filter = () => {
  const dispatch = useDispatch();

  //   şirket ismi inputu değiştiğinde çalışır
  const onSearchChange = (e) => {
    dispatch(handleInputChange(e.target.value));
  };

  // durum filtresi değiştiğinde
  const onStatusChange = (e) => {
    dispatch(handleStatusChange(e.target.value));
  };

  // sıralama selecti değiştiğinde
  const onSortChange = (e) => {
    dispatch(handleSortChange(e.target.value));
  };

  // filtreleri temizle
  const onResetButton = () => {
    dispatch(handleReset());
  };

  return (
    <section className="filter-sec add-sec">
      <h2>Arama Formu</h2>
      <div className="inputs">
        <div className="input-field">
          <label>Şirket İsmi: </label>
          <input type="text" onChange={(e) => onSearchChange(e)} />
        </div>
        <div className="input-field">
          <label>Durum: </label>
          <select onChange={(e) => onStatusChange(e)}>
            <option value="Hepsi" hidden>
              Hepsi
            </option>
            <option value="Mülakat">Mülakat</option>
            <option value="Reddedildi">Reddedildi</option>
            <option value="Devam Ediyor">Devam Ediyor</option>
          </select>
        </div>
        <div className="input-field">
          <label>Sırala: </label>
          <select onChange={(e) => onSortChange(e)}>
            <option value="Önce-Yeni">En yeni</option>
            <option value="Önce-Eski">En Eski</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
          </select>
        </div>
        <button onClick={onResetButton}>Filtreleri Temizle</button>
      </div>
    </section>
  );
};

export default Filter;