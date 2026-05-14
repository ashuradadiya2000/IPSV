import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom'

const PublicLayout = () => {
  const navigate = useNavigate();
  const { authenticated } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!authenticated) {
      navigate('/auth/login')
    }else{
      navigate('/ipsdashboard')
    }
  }, [authenticated])

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default PublicLayout