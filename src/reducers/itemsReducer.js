// @flow

import type { ItemsState } from './../types/state'
import type { ItemsActions } from './../types/actions'

const buildSearchMessage = (numberOfItems: number): string => {
  if (numberOfItems === 1) {
    return 'Only one result was found.'
  } else if (numberOfItems > 1) {
    return `${numberOfItems} results were found.`
  }

  return 'No results found for the given search.'
}

const initState = {
  searchedItems: [],
  availables: [
    {
      id: 1, title: 'Lorem ipsum dolor sit amet A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt fugiat nulla.', price: 9.99,
    },
    {
      id: 2, title: 'Sed ut perspiciatis unde omnis', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', price: 20.00,
    },
    {
      id: 3, title: 'Nemo enim ipsam voluptatem quia', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', price: 10.00,
    },
    {
      id: 4, title: 'Ut enim ad minima veniam', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', price: 50.00,
    },
    {
      id: 5, title: 'Quis autem vel eum iure', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.', price: 12.75,
    },
    {
      id: 6, title: 'At vero eos et accusamus et', description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.', price: 11.00,
    },
    {
      id: 7, title: 'Nam libero tempore, cum soluta', description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia.', price: 13.00,
    },
    {
      id: 8, title: 'Ut enim ad minim veniam, quis nostrud', description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid?', price: 8.00,
    },
    {
      id: 9, title: 'Lorem ipsum dolor sit amet I', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', price: 1.75,
    },
    {
      id: 10, title: 'Excepteur sint occaecat cupidatat', description: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur?', price: 100.00,
    },
    {
      id: 11, title: 'Quis autem vel eum iure', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.', price: 99.90,
    },
    {
      id: 12, title: 'Nemo enim ipsam voluptatem quia', description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.', price: 24.50,
    },
  ],
  searchResultMessage: '',
}

const itemsReducer = (state: ItemsState = initState, action: ItemsActions) => {
  switch (action.type) {
    case 'SEARCH_ITEM_BY_WORD':
    {
      const searchedItems = state.availables.filter(item => item.title.includes(action.word))

      return {
        ...state,
        searchedItems,
        searchResultMessage: buildSearchMessage(searchedItems.length),
      }
    }
    default:
      return state
  }
}

export default itemsReducer
