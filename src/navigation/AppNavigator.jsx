import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';

// 📄 screens umum
import PublicHome from '../screens/PublicHome';
import About from '../screens/About';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import ProfileUser from '../screens/ProfileUser'; // kalau udah kamu buat

// 📄 screens admin
import AdminDashboard from '../screens/AdminDashboard';
import AdminOrmawaCRUD from '../screens/AdminOrmawaCRUD';
import AdminUKMCRUD from '../screens/AdminUKMCRUD';
import AdminKegiatanCRUD from '../screens/AdminKegiatanCRUD';

// 📄 screens user
import UserDashboard from '../screens/UserDashboard';
import DetailKegiatan from '../screens/DetailKegiatan';

// 📄 screens publik tambahan
import Ormawa from '../screens/ormawa';
import Ukm from '../screens/ukm';
import AcaraKampus from '../screens/acarakampus';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { user } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* kalau belum login */}
      {!user ? (
        <>
          <Stack.Screen name="PublicHome" component={PublicHome} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ormawa" component={Ormawa} />
          <Stack.Screen name="ukm" component={Ukm} />
          <Stack.Screen name="acarakampus" component={AcaraKampus} />
        </>
      ) : user.role === 'admin' ? (
        <>
          <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="AdminOrmawaCRUD" component={AdminOrmawaCRUD} />
          <Stack.Screen name="AdminUKMCRUD" component={AdminUKMCRUD} />
          <Stack.Screen name="AdminKegiatanCRUD" component={AdminKegiatanCRUD} />
        </>
      ) : (
        <>
          <Stack.Screen name="UserDashboard" component={UserDashboard} />
          <Stack.Screen name="Profile" component={ProfileUser} />
          <Stack.Screen name="DetailKegiatan" component={DetailKegiatan} />
        </>
      )}
    </Stack.Navigator>
  );
}
