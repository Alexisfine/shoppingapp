import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom';

const router = createBrowserRouter(
    [
        {
          path:'/',
          element:<span>Home</span>
        },
        {
          path:'/products/:id',
          element:<span>Category</span>
        },
        {
          path:'/product/:id',
          element:<span>Product</span>
        }
    ]
)

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
