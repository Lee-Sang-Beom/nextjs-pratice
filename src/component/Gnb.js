import { useRouter } from 'next/router';
import { Menu } from 'semantic-ui-react'

export default function Gnb(){
    const router = useRouter(); // useRouter는 nextjs에서 사용하는거
    let activeItem;
    if (router.pathname === '/'){
      activeItem = 'home';
    }
    else if(router.pathname === '/about'){
      activeItem = 'about';
    }
    else if(router.pathname === '/admin'){
      activeItem = 'admin';
    }

    function goLink(e, data){
      // 넘어오는 data는 name, active 등임. (시멘틱 ui에서 제공하는 거. semantic-ui-react > Menu에 있는 속성들)
      if(data.name === 'home'){
        router.push('/');
        // router에 push 한다는 건 nav바에서 클릭하면 라우터가 그쪽으로 이동시켜줌
      }
      else if (data.name === 'about'){
        router.push('/about'); 
      }
      else if (data.name === 'contact Us'){
        router.push('/contact'); 
      }
      else if (data.name === 'admin'){
        router.push('/admin'); 
      }
    }
    return(
        <Menu inverted>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={goLink}
        />
        <Menu.Item
          name='about'
          active={activeItem === 'about'} 
           // 클릭하면 불이들어오는 거. 우리는 이걸해야함. 그게 router로 적용됨.
           // activeItem이 about일때 active가 되는데, 위 router.push(about) 이 되면서 pathname이 about이 되면 activeitem이 about되면서 여기 active가 불이들어옴
          onClick={goLink}
        />
        <Menu.Item
          name='contact Us'
          active={activeItem === 'contact'} 
           // 클릭하면 불이들어오는 거. 우리는 이걸해야함. 그게 router로 적용됨.
           // activeItem이 about일때 active가 되는데, 위 router.push(about) 이 되면서 pathname이 about이 되면 activeitem이 about되면서 여기 active가 불이들어옴
          onClick={goLink}
        />
        <Menu.Item
          name='admin'
          active={activeItem === 'admin'} 
           // 클릭하면 불이들어오는 거. 우리는 이걸해야함. 그게 router로 적용됨.
           // activeItem이 about일때 active가 되는데, 위 router.push(about) 이 되면서 pathname이 about이 되면 activeitem이 about되면서 여기 active가 불이들어옴
          onClick={goLink}
        />
      </Menu>
    )
}