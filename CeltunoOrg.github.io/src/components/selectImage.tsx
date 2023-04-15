import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import PresetDataService from "../services/preset-firebase-service"
// import DayService from "../services/day-firebase-service"
import { IDayActivity, IImagePreset, IMyDay, IPreset, ISelectImage } from '../types/day.type';
import { FormControl, ImageList, ImageListItem, ImageListItemBar, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DoneIcon from '@mui/icons-material/Done';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export interface DialogTitleProps {
    id: string;
    images: Array<string> | null;
    children?: React.ReactNode;
    onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 4,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}
interface Props {
    children?: React.ReactNode
    images: string[]
    activities: IDayActivity[]
    selectCallback: (theSelected: Array<ISelectImage>) => Array<ISelectImage>//theSelected: ISelectImage []}

}

export default function SelectImage(props: Props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        // selected.map((item) => (
        //     props.images.push(item)
        // ));
        props.selectCallback(selected)
        setOpen(false);
    };
    const handleCancel = () => {

        setOpen(false);
    };


    const [selected, setSelected] = React.useState<IDayActivity[]>([]);
    const [selectedBool, setSelectedBool] = React.useState<boolean>(false);



    const getimages = () => {
        let tmp: ISelectImage[] = []
        tmp = { ...selected }
        return tmp
    }
    const imageClick = (image: string, index: number) => {
        if (image) {
            // let tmpImages: ISelectImage[]
            initImages = { ...selected }
            // let tmpSelcted: string[] = []
            initImages[index].Selected = initImages[index].Selected === true ? false : true;
            setSelected(initImages)
            // tmpSelcted =  { ...selected }
            // tmpSelcted.push(image)
            // setSelected(tmpSelcted)
            // setSelectedBool(true)
            // let ttt = testData
        }
    }
    let selectTest = false;
    let initImages: IDayActivity[] = [];
    function merge(arr1: unknown[], arr2: unknown[]) {
        const newArr: unknown[] = [...arr1];
        for (let i = 0; i < arr2.length; i++) {
            const item = arr2[i];
            if (newArr.includes(item)) continue;
            newArr.push(item);
        }
        return newArr;
    }
    useEffect(() => {
        initImages = testActivities// merge(initImages ?? [], testActivities) as unknown as IDayActivity[];
        setSelected(initImages)
        //const mapImages = testImages;//map((image) => tmpImages.push(image))//{Image:  image,Selected; false }))
        // const fetchData = async () => {
        //   await getAllDbEntries();      
        // }      
        // call the function
        // fetchData().then(
        // setKeyFromDate)
        //   // make sure to catch any error
        //  .catch(console.error);
    }, []);

    // const updatePreset = (id: string) => {
    //     // const key = this.props.selectedDayId;
    //     if (id === undefined || id === null || id === "") {
    //         console.log("No id provided");
    //         return
    //     }
    //     console.log("Updating preset");
    //     PresetDataService.updateItemDb(id, preset)
    // }


    // const selectImage = (index: number, id: string) => {
    //     const tmpPreset: IPreset = { ...preset }
    //     if (tmpPreset.Activities.length > 0) {
    //         const activity = tmpPreset?.Activities[index]
    //         activity.Selected = true
    //         tmpPreset.Activities[index] = activity
    //         setPreset(tmpPreset)

    //     }
    //     updatePreset(id)

    // }
    initImages = initImages.length <= 0 ? testActivities : initImages// props.activities ?? [] : initImages 
    const result = (arr1: IDayActivity[], arr2: IDayActivity[]) => {
        return arr2.reduce(
            (acc, item) => {
                return acc.includes(item) ? acc : [...acc, item]
            },
            [...arr1]
        )
    }
    // {initImages = result( initImages,testActivities)}
    // { initImages = (props.activities && props.activities.length >0)? merge(props.activities ?? [], testActivities) as unknown as IDayActivity[] : [] }
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add images
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} images={null}>
                    Select images
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    
                    {/* <Typography gutterBottom>
                        Name - Image - Description
                    </Typography> */}
                    {(initImages && initImages.length > 0) ?

                        //props.images ?
                        <>
                            {
                                <div>
                                    {/* <TextField id="standard-basic" label="Preset name" variant="standard" value={.n
                                    } /> */}
                                    <div className='selectImageBox'>
                                        <ImageList sx={{ width: 500, height: 650 }} cols={3} rowHeight={164}>

                                            {

                                                //props.images.map((image, imgIndex) =>
                                                initImages.map((selectActivity, imgIndex) =>
                                                (
                                                    <ImageListItem key={selectActivity.Id + imgIndex}>
                                                        <ImageListItemBar
                                                            sx={{
                                                                background:
                                                                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                                                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                                            }}
                                                            title={""}
                                                            position="top"
                                                            actionIcon={
                                                                <IconButton
                                                                    sx={{ color: 'white' }}
                                                                    aria-label={`star ${""}`}
                                                                    onClick={() => imageClick(selectActivity.Image, imgIndex)}
                                                                >
                                                                    {selectActivity.Selected ?
                                                                        <DoneIcon /> : ""
                                                                        //<StarBorderIcon/>
                                                                    }
                                                                </IconButton>
                                                            }
                                                            actionPosition="left"
                                                        />
                                                        <div
                                                            id={"act" + imgIndex.toString()} key={"act" + imgIndex} style={{ order: (imgIndex), }}
                                                            className='selectImageContainer'
                                                            onClick={() => { imageClick(selectActivity.Image, imgIndex) }}
                                                        >
                                                            <img
                                                                src={`../images/${selectActivity.Image}`}

                                                                srcSet={`../images/${selectActivity.Image}`}
                                                                alt={selectActivity.Image}
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                    </ImageListItem>

                                                )
                                                )}
                                        </ImageList>
                                    </div>
                                </div>

                            }
                        </>

                        :

                        "No images"


                        //       <div> </div>


                        //   :
                        //   {

                        //   }

                    }


                </DialogContent>
                <DialogActions>
                    {/* <button onClick={() => { alert("adding") }}>Add image</button> */}
                    <Button autoFocus onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button autoFocus onClick={handleClose}>
                        Save changes
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
const testActivities: IDayActivity[] =
    [
        {
            Id: 2,
            Name: "Preset",
            Image: "image5.png",
            Selected: false,
            Order: "0",
        },
        {
            Id: 2,
            Name: "Preset",
            Image: "image6.png",
            Selected: false,
            Order: "0",
        },
        {
            Id: 2,
            Name: "Preset",
            Image: "image7.png",
            Selected: false,
            Order: "0",
        },
        {
            Id: 2,
            Name: "Preset",
            Image: "image8.png",
            Selected: false,
            Order: "0",
        },
        {
            Id: 2,
            Name: "Preset",
            Image: "image9.png",
            Selected: false,
            Order: "0",
        },
        {
            Id: 2,
            Name: "Preset",
            Image: "image10.png",
            Selected: false,
            Order: "0",
        },
        {
            Id: 2,
            Name: "Preset",
            Image: "image11.png",
            Selected: false,
            Order: "0",
        },

    ]
const testImages: ISelectImage[] =
    [
        {
            Image: "image5.png",
            Selected: false
        },
        {
            Image: "image6.png",
            Selected: false
        },
        {
            Image: "image7.png",
            Selected: false
        },
        {
            Image: "image8.png",
            Selected: false
        },
        {
            Image: "image9.png",
            Selected: false
        },
        {
            Image: "image10.png",
            Selected: false
        },
        {
            Image: "image11.png",
            Selected: false
        },

    ]

const testData: IMyDay[] =
    [
        {
            Id: 1,
            Name: "Preset",
            Description: "Description",
            Activities: [

                {
                    Id: 2,
                    Name: "Preset",
                    // Description: "Description",
                    Image: "image6.png",
                    Order: "0",
                    Selected: false
                },
                {
                    Id: 3,
                    Name: "Preset",
                    // Description: "Description",
                    Image: "image7.png",
                    Order: "0",
                    Selected: false
                },
                {
                    Id: 4,
                    Name: "Preset",
                    // Description: "Description",
                    Image: "image8.png",
                    Order: "0",
                    Selected: false
                }
            ]
        },
        {
            Id: 5,
            Name: "Preset2",
            Description: "Description2",
            // images: ["image9.png"],
            Activities: [
                {
                    Id: 6,
                    Name: "Preset",
                    // Description: "Description",
                    Image: "image10.png",
                    Order: "0",
                    Selected: false
                },
                {
                    Id: 7,
                    Name: "Preset",
                    // Description: "Description",
                    Image: "image11.png",
                    Order: "0",
                    Selected: false
                }
            ]
        }
    ]