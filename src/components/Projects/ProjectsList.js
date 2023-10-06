//Mobile videos
import AmazonVideoMobile from "../../assets/image/Amazon/amazonVideoMobile.mp4";
import SneakmartVideoMobile from "../../assets/image/Sneakmart/sneakmartVideoMobile.mp4";
import HDMIVideoMobile from "../../assets/image/HDMI/HDMIVideoMobile.mp4";

//Desktop videos
import AmazonVideoDesktop from "../../assets/image/Amazon/amazonVideoDesktop.mp4";
import HDMIVideoDesktop from "../../assets/image/HDMI/HDMIVideoDesktop.mp4";
import SneakmartVideoDesktop from "../../assets/image/Sneakmart/sneakmartVideoDesktop.mp4";


const ProjectsList = [
{
    key: 'sneakmart',
    number: '001',
    title: 'Sneakmart',
    videoDesktop: SneakmartVideoDesktop,
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
    videoDesktop: HDMIVideoDesktop,
    videoMobile: HDMIVideoMobile,
    link: '/HDMI'
}];

export default ProjectsList;