import React, { useCallback, useEffect, useState} from "react";
import friendService from "../../services/friendService";
import FriendsCard from "./FriendsCard";
import {useNavigate,Link,useLocation, useParams} from "react-router-dom"
import "rc-pagination/assets/index.css";
import Pagination from "rc-pagination";
import locale from "rc-pagination/lib/locale/en_US";
//import FriendNewEdit from "./FriendNewEdit";

function Friends() {
  let navigate = useNavigate();
  let {state} = useLocation();
  let {friendId}= useParams();
  
  //#region ******DA STATES*****
  const [amigos, setAmigos] = useState({ friends: [], friendsComponent: [] });
  const [showAmigos, setShowAmigos] = useState(false);
  const[renderAmigoBtn,setRenderAmigoBtn]=useState(false);
  const[addAmigo,setAddAmigo]=useState(false);
  const[searchData,setSearchData]=useState({q:""})
  const[perPage]=useState(6)
  const[size,setSize]=useState(perPage);
  const[current,setCurrent]=useState({pageIndex:0,pageSize:0,totalCount:0,totalPages:0});
  const[currentPage,setCurrentPage]=useState(1)
  // const[pagenateData,setPagenateData]=useState({current:1,})
  // const[itemsPerPage,setItemsPerPage]=useState(6)
  // const [amigoInfo,setAmigoInfo]=useState({
  //   title:"",
  //   bio:"",
  //   summary:"",
  //   headline:"",
  //   slug:"",
  //   statusId:"",
  //   primaryImage:""
  // })
  //#endregion
  console.log(friendId,setSize,setCurrent,size,current);
  
  const getAllFriends = (pageIndex, pageSize) => {
    console.log("getAllFriends", pageIndex, pageSize);
    friendService.getFriends(0,15).then(getFriendOk).catch(getFriendErr);
  };

  const onSearchSuccess=(data)=>{
    const friendQuery = data.data.item.pagedItems;
    console.log("We got your query=>>>",data);
    console.log(friendQuery);
    

    setAmigos((prevState) => {
      const newAmigo = { ...prevState };
      newAmigo.friends = friendQuery;
      newAmigo.friendsComponent = friendQuery.map(mapFriends);
      return newAmigo;
    });
  }
  useEffect(() => {
    
    console.log("useEffect firing********");
    getAllFriends(current.pageIndex, current.pageSize);
    }, [state,size]);
 
    const getFriendOk = (data) => {
    const friendsArray = data.item.pagedItems;
    const myPages = data.item;
    console.log("getFriendOK", data);
    console.log(friendsArray);
    
    
    setAmigos((prevState) => {
      const newAmigo = { ...prevState };
      newAmigo.friends = friendsArray;
      newAmigo.friendsComponent = friendsArray.map(mapFriends);
      return newAmigo;
    });
    
    setCurrent((prevState)=>{
      const thePages = {...prevState};
      thePages.pageIndex = myPages.pageIndex;
      thePages.pageSize = myPages.pageSize;
      thePages.totalCount = myPages.totalCount;
      thePages.totalPages = myPages.totalPages;
      return thePages;  
    })
  };
  
  const getFriendErr = (error) => {
    console.error("getFriendsErr", error);
  };
  const onEditRequest=(friendObj,eObj)=>{
    const getEditSuccessHandler=(idForEdit)=>{
      
        console.log("Edit in progress",idForEdit);
        const onMyFriendSuccess =(response)=>{
          console.log("We got the friend=>>>",response);
        }
        const onMyFriendFail=(error)=>{
          console.error("Where is it*****",error);
        }
        friendService.myFriend(idForEdit).then(onMyFriendSuccess).catch(onMyFriendFail)
      
    }
    console.log(friendObj.id,{friendObj,eObj});
    getEditSuccessHandler(friendObj.id)
  }
  
  
  const onDeleteRequest = useCallback((friendObj, eObj) => {
    console.log(friendObj.id,{ friendObj, eObj });
    
    
    //console.log("Id to be deleted: ", idForDelete);
    const handler = getDeleteSuccessHandler(friendObj.id)
    friendService.deleteFriend(friendObj.id).then(handler).catch(OnDeleteFail);
  }, []);
  
  const getDeleteSuccessHandler = (idForDelete)=>{
    return ()=>{
        console.log("Dleet Success",idForDelete);
        setAmigos((prevState) => {
          const newAmigo = { ...prevState };
          newAmigo.friends = [...newAmigo.friends];
          
          const idxOf = newAmigo.friends.findIndex((friend) => {
            let result = false;
            if (friend.id === idForDelete) {
              result = true;
            }
            
            return result;
          });
          console.log("Index of value: ", idxOf);
          if (idxOf >= 0) {
            newAmigo.friends.splice(idxOf, 1);
            newAmigo.friendsComponent = newAmigo.friends.map(mapFriends);
          }
          
          return newAmigo;
        });
    }
  }

  
  const OnDeleteFail =(error)=>{
    console.error("Could not dleet",error);
  }
  
  const mapFriends = (friend) => {
    console.log("map DEEEEZ", friend);
    return (
      <FriendsCard
        aFriend={friend}
        key={friend.id}
        onFriendDleetClick={onDeleteRequest}
        onFriendEditClick={onEditRequest}
      />
    );
  };
  const onRenderAmigosClick = (e) => {
    e.preventDefault();
    setShowAmigos(() => {
      return !showAmigos;
    });
    setRenderAmigoBtn(current => !current)
  };
  const onAddAmigoClick =e=>{
    e.preventDefault();
    console.log("Did we add",e.currentTarget.dataset.page);
    navigate(e.currentTarget.dataset.page);

    setAddAmigo(()=>{
      return !addAmigo;
    });
  };
  const onSearchFail=(error)=>{
    console.error("You dont make sense********",error);
  }
  
  const onSearchClick =e=>{
    e.preventDefault();
    console.log("i do a clicky");
    friendService.searchFriend(0,10,searchData.q).then(onSearchSuccess).catch(onSearchFail);
  }
  const onSearchChange = (e) => {
    const target = e.target;
    const newSearchValue = target.value;
    const idOfField = target.id;
    console.log({ idOfField, newSearchValue });

    setSearchData((prevState) => {
      console.log("updater onChange");

      const newSearchObj = {
        ...prevState,
      };
      newSearchObj[idOfField] = newSearchValue;
      return newSearchObj;
      
    });

    console.log("end onChange");
  };
  // const onPagenateChange=(page)=>{
  //   console.log("Sending you to this page=>>>>",page);
  //   setPagenateData({current:page})
  // };
  /*                                                             */
  // const perPageChange = (page)=>{
  //   setSize(page);
    
  //   const newPerPage = Math.ceil(current.totalCount/page);
  //   if (currentPage >newPerPage) {
  //     setCurrentPage(newPerPage)
  //   }
  // }
  const getData = (currentPage,pageSize)=>{
    return current.totalCount.slice((currentPage - 1)*pageSize, currentPage* pageSize);
  }
  getData && console.log(getData);

  const onPaginationChange=(page,pageSize)=>{
    setCurrentPage(page);
    setSize(pageSize);
  }
  
  /* ******PAGINATION ATTEMPTS*****
  // const prevNextArrow = (currentPage,type, originalElement)=>{
  //   if (type === "prev") {
  //     return <button><i className="fa fa-angle-double-left"></i></button>;
  //   }
  //   if (type === 'next') {
  //     return <button><i className="fa fa-angle-double-right"></i></button>
  //   }
  //   return originalElement;
  // }
   Pagination Tasks
   const pagenate =(pageSize,totalPages)=>{
    const pageNumbers = [];
    const totalItems = data.item.totalCount;

    for(let i=1;i<=Math.ceil(totalItems / itemsPerPage);i++){
      pageNumbers.push[i];
    }

    const changePage = (pageNumber)=>{
      setPagenateData(pageNumber)
    }

    const pageCount = 
    DOWN IN RETURN
    <nav>
      <ul className=pagination>
      {pageNumbers.map(number =>
        <li key={number} className=page-item
        onClick={} >
          <a to="!#" className=page-link>
          {number}
          </a>
        </li>)}
      </ul>
    </nav>
   }
   <Pagination
            className="pagination-data my-2"
            showTotal={(total,range)=>`Showing ${range[0]}-${range[1]} of ${total} `}
            onChange={onPaginationChange} 
            current={current}
            //total={}
            locale={locale}
            pageSize={size}
            showSizeChanger={false}
            itemRender={prevNextArrow}
            onShowSizeChange={perPageChange}
            defaultCurrent={1}
            defaultPageSize={10}
            hideOnSinglePage={true}
            
            />
  */



  return (
    <>
      <React.Fragment>
        <br></br>
        <div className="container-fluid d-flex col justify-content-center">
          <h2 className="d-flex">
            Friends 
            &nbsp;
            <Pagination
            className="my-2"
            onChange={onPaginationChange}
            current={currentPage}
            total={current.totalCount}
            locale={locale}
            defaultPageSize={6}
            
            /></h2>
        </div>
        <br></br>
        <div className="container-fluid d-flex col justify-content-center ">
          <form className="d-flex">
            <input 
              className="form-control me-2 text-center" 
              type="search"
              id="q" 
              placeholder="Search Amigos" 
              aria-label="search"
              value={searchData.q}
              onChange={onSearchChange}
            />
            <button className="btn btn-outline-success" type="submit" onClick={onSearchClick}>Search</button>
          </form>
        </div>
        <div className="d-flex justify-content-center">
          {renderAmigoBtn ?
          <button
            className ="btn btn-warning btn-space"
            style={{margin:"50px"}}
            onClick={onRenderAmigosClick}
          >
            Hide Amigos
          </button> 
          :
          <button
            className ="btn btn-primary"
            style={{margin:"50px"}}
            onClick={onRenderAmigosClick}
          >
            Render Amigos
          </button>
          }
          <Link
            className="btn btn-outline-primary"
            type="Link"
            id="friendNewEdit"
            style={{margin:"50px"}}
            onClick={onAddAmigoClick}
            data-page="/friends/new"
            to="/friends/new"
          >
            Add Amigos
          </Link>
        </div>
        <br></br>
        <div className="container">
          <div className="row flex-wrap ">
            {showAmigos ? amigos.friendsComponent : null}
          </div>
        </div>
      </React.Fragment>
    </>
  );
}

export default Friends;
