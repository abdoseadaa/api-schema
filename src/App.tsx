import './App.css'
import useUsersStore from './components/users/user.store'
import Users from './components/users/Users'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


function App() {


  return (
    <Tabs defaultValue="roles" className="w-full">
    <TabsList className="grid w-full grid-cols-2">

      
      <TabsTrigger value="roles">Roles</TabsTrigger>
      <TabsTrigger value="users">Users</TabsTrigger>
    </TabsList>
    <TabsContent value="roles">
      <div> roles </div>
    </TabsContent>
    <TabsContent value="users">
      <Users />
    </TabsContent>
  </Tabs>
  )
}

export default App
