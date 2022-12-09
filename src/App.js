import {useState, useEffect} from "react";
import styles from './style.module.css'

const toys = [
    {
        value: 'car',
    },
    {
        value: 'soldier'
    }
]


export default function App() {
    const [selectedToys, setToys] = useState([]);
    const [selectedSort, setSort] = useState(null);


    useEffect(() => {
        if (selectedSort === 'az') {
            setSort(selectedToys.sort())
        }
        if (selectedSort === 'za') {
            setSort(selectedToys.sort().reverse())
        }
    }, [selectedSort])


    const saveToy = (e) => {
        const selectedOptions = [...e.target.selectedOptions].map(elem => elem.value);
        // e.target - то на каком элементе сработал event
        // у каждого элемента есть свой набор атрибутов
        // у мульти селекта атрибут selectedOptions
        // в selectedOptions хранится HTMLCollection
        // HTMLCollection перебрать нельзя поэтому нужно привести ее в массив
        //! на backend передается то что у элемента в атрибуте 'value'
        // reverse() - переворачивает массив но не сортирует
        // поэтому reverse() нужен на сортированном массиве selectedToys.sort().reverse()
        setToys(selectedOptions)
    }

    const saveSort = (e) => {
        setSort(e.target.value);
    }


    return (
        <div>
            <div className={styles.output}>
                {selectedToys.join(',')}
            </div>
            <div className={styles.flex}>
                <select onChange={saveToy} multiple>
                    {
                        toys.map((toy, index) => {
                            return <option key={index} value={toy.value}>{toy.value}</option>
                        })
                    }
                </select>
                <select onChange={saveSort}>
                    <option value=""></option>
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                </select>
            </div>
        </div>
    )
}