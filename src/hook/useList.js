import { useState } from 'react'

export const useList = (InitialList = []) => {
    const [newItem, setNewItem] = useState('');
    const [objItem, setObjItem] = useState({})
    const [lists, setList] = useState(InitialList);

    const addNewItem = (e) => {
        e.preventDefault();
        if (objItem.id) {
            if (objItem.item === newItem) {
                setNewItem('')
            } else {

                const taskEdit = { ...objItem, item: newItem }
                const filter = lists.filter((i) => {
                    return i.id !== objItem.id
                })
                const newObj = filter.concat(taskEdit)
                const objOrder = newObj.sort((a, b) => {
                    return a.id - b.id;
                });
                setList(objOrder)
            }

        } else {
            setList([...lists, { item: newItem, complete: false, id: lists.length + 1 }]);
            setNewItem('')
        }
    }

    const isListEmpty = () => lists.length === 0

    const editItem = (id) => {
        const editTask = lists.find(l => l.id === id)
        setObjItem(editTask)
        setNewItem(editTask.item)
    }

    const removeItem = (id) => {
        setList(lists.filter((l) => l.id !== id))
    }

    const toggleCompleteItem = (id) => {
        const item = lists.find(l => l.id === id)

        const newState = lists.map(list => {
            if (list.id === id) {
                return {
                    ...list, complete: !item.complete
                }
            }
            return list
        })

        setList(newState)
    }

    const removeAllItems = () => setList([])

    const sortItems = () => {
        const list = [...lists]
        const newState = list.sort((a, b) => a.complete - b.complete)

        setList(newState)
    }

    const investList = () => {
        const inverst = lists.map((item, i, array) => { return array[array.length - i - 1] })
        setList(inverst)
    }
    return [newItem, setNewItem, lists, addNewItem, isListEmpty, editItem, removeItem, toggleCompleteItem, removeAllItems, sortItems, investList]
}