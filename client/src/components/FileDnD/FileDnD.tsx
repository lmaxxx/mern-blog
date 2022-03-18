import classes from './FileDnD.module.scss'
import { useLottie } from "lottie-react"
import FileIconAnimation from '../../asset/fileIconAnimation.json'

const option = {
  animationData: FileIconAnimation,
  loop: true,
  autoplay: true,
}

const style = {
  height: "350px"
}

const FileDnD = () => {
  const {View} = useLottie(option, style)

  return (
    <div className={classes.FileDnD}>
      {View}
    </div>
  )
}

export default FileDnD
