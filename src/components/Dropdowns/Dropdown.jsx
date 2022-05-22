import React, { useState } from "react";
import { createPopper } from "@popperjs/core";

const Dropdown = (props) => {
  // dropdown props
  const [items, setitems] = useState(props?.data);
  const [selectedItem, setSelectedItem] = useState(null);
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const handleItemClick = (id) => {
      //console.log('item selec',props.data)
    //props.onChange(id);
    var item = props.data.find(o => o.id == id);
    props.selectedItem === id ? props.setSelectedItem(null) : props.setSelectedItem(item);
    //console.log('item selec item',item)
    setSelectedItem(item);
    
    setDropdownPopoverShow(false);
  };

  return (
    <div className="relative w-full mb-3">
      <a
        className="text-blueGray-500 block py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      > 
        {/* <i className="fas fa-bell"></i> */}
        {/* <label
            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
            >
            {selectedItem?.name != "" ? selectedItem?.name : props?.title }
        </label> */}
        <div className="relative w-full mb-3">
            <label
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                // placeholder= {selectedItem?.id != null ? selectedItem?.name : props?.title }
            >{selectedItem?.id != null ? selectedItem?.name : props?.title }</label>
        </div>
      </a>


      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48"
        }
      >
        {items.map((item) => (
                <div
                //href="#pablo"
                className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                }
                onClick={(e) => {
                    handleItemClick(e.target.id);
                  }}
                id={item.id}
                key={item.id}>
                {item?.name}
                </div>
       ))}
      </div>
    </div>
  );
};

export default Dropdown;
