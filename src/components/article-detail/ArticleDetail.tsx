import './ArticleDetail.scss';
import { useState } from 'react';
import Post from '../../models/Post';
import AuthorCard from '../ui/authorCard/AuthorCard';


function PostDetail(props: { match: { params: { id: any; }; }; }) {
    const [post, setPost] = useState<Post>({});

    /*useEffect(() => {
        const fetchPost = async () => {
            const id = props.match.params.id;
            const post = await (await fetch('https://jsonplaceholder.typicode.com/posts/' + id)).json();
            setPost(post);
        }
        fetchPost();
    }, [props]);*/

    return (
        <div className="Post">
            <div className="container">
                <div className="doc">
                    <h1 className="title">Lorem Ipsumm</h1>
                    <img src="../assets/wallpaper.jpg" alt="" className="image" />
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum ligula in sapien varius, nec rutrum dui bibendum. Donec bibendum lacinia lacus, non commodo nunc vestibulum aliquet. Sed porttitor orci ac est tempor, quis bibendum massa blandit. Phasellus ac gravida arcu. Pellentesque efficitur mollis felis eu venenatis. Ut efficitur ligula id tempus laoreet. Ut nec laoreet dui, vehicula commodo ipsum.
                    Nullam vitae feugiat neque, vel suscipit sem. Nullam at quam a magna tristique pulvinar vel at odio. In id lobortis lectus. Integer quis consectetur mauris. Cras sed urna non orci congue mattis. Quisque eget ex sed neque efficitur dapibus eu ac elit. Sed lacinia lectus in lobortis viverra. Suspendisse viverra sapien ac tellus ullamcorper, elementum semper augue molestie. Pellentesque sed enim sit amet lacus dignissim porta eu non libero. Morbi ac urna eget nunc ornare volutpat. Morbi lobortis maximus sapien, id ultricies libero pellentesque id. Morbi finibus, felis eget egestas tempor, dui risus tempus magna, vel cursus diam lorem eget lectus.
                    Curabitur pretium dapibus interdum. Aenean interdum vehicula mauris, sodales porttitor turpis sodales nec. Etiam at lacus eget mauris tempus commodo eget ut lacus. Donec dapibus lorem sed metus finibus pulvinar. Maecenas sed nibh at magna pellentesque mollis. Phasellus at elementum tortor. Nam vel augue ac velit porta pharetra nec a tortor. Aenean suscipit, lorem id rhoncus sodales, nisi risus lobortis quam, eu aliquet nibh tellus sed odio. Quisque et ex eu justo finibus molestie. In convallis metus ut congue sodales. Nam dictum, leo ut sollicitudin aliquet, lorem orci blandit erat, quis condimentum arcu leo ut nisi.
                    Etiam venenatis purus quis fermentum euismod. Nunc ut ante id nunc feugiat efficitur. Phasellus placerat ligula nec libero posuere finibus. Aenean fermentum malesuada lobortis. Donec eget sollicitudin ligula. Morbi eu ex vitae felis placerat vulputate. Nulla aliquet accumsan felis, ut ultricies dui. Suspendisse laoreet eleifend enim, ac mollis magna rhoncus in. Donec massa sapien, malesuada quis pretium a, tristique a neque. In sit amet ornare erat, quis cursus mauris. Maecenas rutrum malesuada congue. Aenean non sodales nulla. Ut vel interdum massa. Etiam ultricies viverra elementum.
                    Ut efficitur magna eget sollicitudin placerat. Morbi sodales sem eros, non maximus ex sagittis sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec faucibus euismod malesuada. Nullam molestie lorem ligula, a ultricies nulla tincidunt eget. Integer arcu nunc, porttitor luctus quam at, ultrices condimentum libero. Nulla vulputate lacinia ante. Aenean sit amet massa venenatis turpis varius volutpat eu eget est.
                    Duis eleifend felis elit, sed vestibulum tortor ultricies eu. Curabitur tristique venenatis purus, in posuere ligula feugiat eget. Praesent varius velit neque, ut feugiat sapien iaculis ut. Sed quis erat ullamcorper, tincidunt dui vestibulum, egestas nunc. Donec porta imperdiet magna quis pulvinar. Fusce eu libero aliquam, eleifend tellus a, scelerisque augue. Vestibulum ac viverra massa. Proin eget tempor ipsum. Suspendisse lectus augue, mollis non aliquam quis, molestie vel odio. Mauris blandit purus vel dictum pharetra. Nulla facilisi. Sed scelerisque urna at metus condimentum, et semper orci mollis. Duis rutrum maximus diam eget molestie. Suspendisse ut porta dolor. Sed sit amet pharetra velit. Integer id dolor id est pellentesque cursus hendrerit vitae eros.
                    Donec varius orci a tincidunt molestie. Proin metus sapien, aliquam quis ante ut, dictum hendrerit metus. Praesent erat ante, sollicitudin sed leo quis, sagittis tincidunt purus. Nullam molestie eget massa ut placerat. Vivamus feugiat massa id tellus cursus, ac dapibus orci accumsan. Nulla blandit lorem a sapien viverra sollicitudin. Integer pulvinar, enim non ullamcorper pellentesque, eros dolor suscipit metus, vitae blandit erat metus sed arcu.
                    Sed a eros ut dolor hendrerit mattis. Curabitur efficitur dolor id ullamcorper ullamcorper. Fusce gravida sem sit amet ex posuere tincidunt. Praesent semper et enim eget dignissim. Suspendisse eget odio ligula. Integer eget neque nec mauris elementum fermentum vitae vel turpis. Aliquam erat volutpat. In vitae vulputate nisl, quis eleifend est. Vestibulum eu lorem magna. Quisque gravida vehicula elit, et porttitor dolor ornare id. Nunc ut tincidunt sem.
                    Pellentesque sed neque interdum, blandit ante et, euismod magna. Nam fringilla mollis tempor. Curabitur suscipit metus purus, vel auctor magna porttitor id. Vivamus malesuada ante non lacus aliquam, in ultrices diam vulputate. Proin congue ullamcorper ullamcorper. Phasellus laoreet vehicula dignissim. Mauris nec magna in est viverra volutpat. Fusce justo velit, pretium fermentum facilisis nec, ullamcorper eget mauris. Nullam quis elit metus. Duis vulputate augue in mattis varius.
                    Quisque dignissim a erat non mollis. Nulla elit turpis, semper sit amet iaculis eget, finibus a nisl. Praesent at egestas velit. Nam ut finibus nibh. Donec nec neque tincidunt, rutrum nisi non, consequat quam. Maecenas tincidunt nibh a sem hendrerit, eget luctus turpis hendrerit. Proin lectus lorem, volutpat sit amet lectus ac, pretium scelerisque nibh. Fusce eu pharetra ex, vestibulum hendrerit eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras aliquam felis sed.
                </p>
                    <AuthorCard />
                </div>
                <div className="related">
                    <h1>Related</h1>
                    <h1>Related</h1>
                    <h1>Related</h1>
                    <h1>Related</h1>
                    <h1>Related</h1>
                </div>
            </div>
        </div>
    )
}

export default PostDetail;