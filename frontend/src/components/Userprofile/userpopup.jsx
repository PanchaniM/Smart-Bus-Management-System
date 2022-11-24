import React from 'react';
import {Dialog, DialogTitle, DialogContent, makeStyles, Typography} from'@material-ui/core';



export default function popup(props) {
    
    const {title, children, openPopup, setOpenPopup} = props;

    const useStyles = makeStyles


    return (
        <div className="modal-fullscreen-xl-down">
            <Dialog open={openPopup} maxWidth="md" className="modal-fullscreen-xl-down">
                <DialogTitle>
                    <div style={{display:'flex'}}>
                        <Typography variant="h6" component="div" style={{flexGrow:1}}>
                            {title}
                        </Typography>
                        <button type="button" className="btn btn-danger" aria-label="Close" onClick={()=>{setOpenPopup(false)}}>x</button>
                    </div>
                </DialogTitle>
                <DialogContent dividers>
                        {children}
                </DialogContent>

            </Dialog>
        </div>
    )
}
