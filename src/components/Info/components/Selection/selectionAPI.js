import { FavouriteLottie, ProfileLottie, TargetLottie } from "~/components/Lottie"

const selectionAPI = [
    {
        nameLottie: 'profile',
        title: 'Bản thân',
        nameComponent: <ProfileLottie/>
    },
    {
        nameLottie: 'target',
        title: 'Mục tiêu',
        nameComponent: <TargetLottie/>
    },
    {
        nameLottie: 'favourite',
        title: 'Yêu thích',
        nameComponent: <FavouriteLottie/>
    },
]

export default selectionAPI