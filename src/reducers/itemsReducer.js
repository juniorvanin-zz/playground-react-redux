const initState = {
    availables: [
      { id: 1, title: "Lorem ipsum dolor sit amet A", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt fugiat nulla.", price: 9.99 },
      { id: 2, title: "Lorem ipsum dolor sit amet B", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", price: 20.00 },
      { id: 3, title: "Lorem ipsum dolor sit amet C", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", price: 10.00 },
      { id: 4, title: "Lorem ipsum dolor sit amet D", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", price: 50.00 },
      { id: 5, title: "Lorem ipsum dolor sit amet E", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.", price: 12.75 },
      { id: 6, title: "Lorem ipsum dolor sit amet F", description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.", price: 11.00 },
      { id: 7, title: "Lorem ipsum dolor sit amet G", description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia.", price: 13.00 },
      { id: 8, title: "Lorem ipsum dolor sit amet H", description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid?", price: 8.00 },
      { id: 9, title: "Lorem ipsum dolor sit amet I", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", price: 1.75 },
      { id: 10, title: "Lorem ipsum dolor sit amet J", description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur?", price: 100.00 },
      { id: 11, title: "Lorem ipsum dolor sit amet K", description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.", price: 99.90 },
      { id: 12, title: "Lorem ipsum dolor sit amet L", description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.", price: 24.50 }
    ]
}

const itemsReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default itemsReducer