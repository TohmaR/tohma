//Mobile videos
import AmazonVideoMobile from "../../assets/image/Amazon/amazonVideoMobile.mp4";
import SneakmartVideoMobile from "../../assets/image/Sneakmart/sneakmartVideoMobile.mp4";
import SneakmarPlustVideoMobile from "../../assets/image/Sneakmart+/sneakmart+VideoMobile.mp4";
import JeanProuvetVideoMobile from "../../assets/image/JeanProuve/jeanProuveVideoMobile.mp4";

//Desktop videos
import AmazonVideoDesktop from "../../assets/image/Amazon/amazonVideoDesktop.mp4";
import JeanProuveVideoDesktop from "../../assets/image/JeanProuve/jeanProuveVideoDesktop.mp4";
import SneakmartPlusVideoDesktop from "../../assets/image/Sneakmart+/sneakmart+VideoDesktop.mp4";
import SneakmartVideoDesktop from "../../assets/image/Sneakmart/sneakmartVideoDesktop.mp4";


const ProjectsList = [
{
    key: 'jeanprouvé',
    number: '001',
    title: 'Prouvé',
    videoDesktop: JeanProuveVideoDesktop,
    videoMobile: JeanProuvetVideoMobile,
    link: '/JeanProuve'
},
{
    key: 'sneakmart+',
    number: '002',
    title: 'Sneakmart+',
    videoDesktop: SneakmartPlusVideoDesktop,
    videoMobile: SneakmarPlustVideoMobile,
    link: '/Sneakmart+'
},
{
    key: 'sneakmart',
    number: '003',
    title: 'Sneakmart',
    videoDesktop: SneakmartVideoDesktop,
    videoMobile: SneakmartVideoMobile,
    link: '/Sneakmart'
},
{
    key: 'amazon',
    number: '004',
    title: 'Amazon',
    videoDesktop: AmazonVideoDesktop,
    videoMobile: AmazonVideoMobile,
    link: '/Amazon'
}];

export default ProjectsList;