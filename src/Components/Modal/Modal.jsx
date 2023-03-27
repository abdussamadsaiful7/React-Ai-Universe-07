import React from 'react';

const Modal = (props) => {
    console.log(props.singleData);
    const {image_link, description, integrations, features} = props.singleData;
    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card lg:card-side bg-base-100 ">
                        <div className="card-body border-2 border-error mr-2">
                            <h2 className="card-title">{description? description: 'No result Found!'}</h2>
                            <div className='flex justify-between'>
                                <div>
                                    <h1 className='text-xl font-bold'>Features</h1>
                                    <div className='text-left'>
                                    {
                                        Object.values(features || {}).map((value, index)=><p>{index + 1}.{value.feature_name? value.feature_name:"No data found!"}</p>)
                                    }
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-xl font-bold'>Integrations</h1>
                                    <div className='text-left'>
                                        {
                                           integrations?.map((int, index)=><p>{index + 1}.{int? int: "No result found!"}</p>) 
                                        }
                                    </div>
                                </div>
                            </div>
                            <p></p>
                            <div className="card-actions justify-end">
                            
                            </div>
                        </div>
                        <figure className='w-full'><img className='w-full h-64' src={image_link? image_link[0]:'Sorry no data fund!'}alt="Album"/></figure>
                    </div>
                <div className="modal-action">
                  <label htmlFor="my-modal-5" className="btn">Close</label>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Modal;