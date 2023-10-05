//Mobile videos
import AmazonVideoMobile from "../../assets/image/Amazon/amazonVideoMobile.mp4";
import SneakmartVideoMobile from "../../assets/image/Sneakmart/sneakmartVideoMobile.mp4";

//Desktop videos
import AmazonVideoDesktop from "../../assets/image/Amazon/amazonVideo.mp4";


const ProjectsList = [
{
    key: 'sneakmart',
    number: '001',
    title: 'Sneakmart',
    videoDesktop: AmazonVideoDesktop,
    videoMobile: SneakmartVideoMobile,
    link: '/Sneakmart'
},
{
    key: 'amazon',
    number: '002',
    title: 'Amazon',
    videoDesktop: AmazonVideoDesktop,
    videoMobile: AmazonVideoMobile,
    link: '/Amazon'
},
{
    key: 'HDMI',
    number: '003',
    title: 'HDMI Ping',
    videoDesktop: AmazonVideoDesktop,
    videoMobile: AmazonVideoMobile,
    link: '/HDMI'
}];

export default ProjectsList;