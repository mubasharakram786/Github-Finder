import {useContext} from 'react'
import AlertContext from '../../context/alert/AlertContext'
function Alert() {
const{alert}=useContext(AlertContext);
  return alert !== null && (
      <p className="flex item-center mb-4 space-x-2">
          {alert.type === "error" && (
            <i class="fas fa-times-circle  text-red-500"></i>
          )}
          <p className="flex-1 text-base font-semibold landing-7 text-white">
              <strong>{alert.msg}</strong>
          </p>
      </p>
  )
  
}

export default Alert