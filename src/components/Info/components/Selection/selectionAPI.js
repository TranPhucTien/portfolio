import { FavouriteLottie, ProfileLottie, TargetLottie } from "~/components/Lottie"

const selectionAPI = [
    {
        nameLottie: 'profile',
        title: 'Bản thân',
        nameComponent: <ProfileLottie/>,
        path: '/'
    },
    {
        nameLottie: 'target',
        title: 'Mục tiêu',
        nameComponent: <TargetLottie/>,
        path: '/target'
    },
    {
        nameLottie: 'favourite',
        title: 'Yêu thích',
        nameComponent: <FavouriteLottie/>,
        path: '/favourite'
    },
]

export default selectionAPI