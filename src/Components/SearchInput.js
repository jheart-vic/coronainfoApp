import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Search({ setCountries, Country }) {
  const handleSearch = (e) => {
    setCountries({data: Country.data.filter((listOfCountries) => (
      listOfCountries.name.toLowerCase().includes(e.target.value.toLowerCase())
      ))});
  };

  return (
    <div className="search">
      <InputGroup size="lg" className="center" onChange={handleSearch}>
        <InputGroup.Text id="inputGroup-sizing-lg">Search</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
    </div>
  );
}
export default Search