import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";
import styles from "../styles/InputsContainer.module.css"


export default function InputContainer({searchBarInput, setSearchBarInput, filterValue, setFilterValue}) {
    return (
        <div className={styles.inputs}>
            <SearchBar value={searchBarInput} setValue={setSearchBarInput}/>
            <FilterDropdown value={filterValue} setValue={setFilterValue}/>
        </div>
    )
}