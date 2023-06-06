import Home from '../pages/Home';
import Following from '../pages/Following';
import Live from '../pages/Live'
const publicRoutes=[
   {path:'/',component:Home},
   {path:'/Following',component:Following},
   {path:'/Live',component:Live},
]
const privateRoutes=[]
export {publicRoutes,privateRoutes}