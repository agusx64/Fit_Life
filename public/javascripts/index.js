document.addEventListener('DOMContentLoaded', function() {

    // Botones del sidebar (general)
    let button_product = document.getElementById('button_product');
    let button_members = document.getElementById('button_members');
    let button_users = document.getElementById('button_users');

    //Menus contextaules (general)
    let product_context = document.getElementById('context_products');
    let members_context = document.getElementById('context_members');
    let users_context = document.getElementById('context_users');

    //Variables de fondo oscuro (Productos)
    const modalOverlayRegister = document.getElementById('modal_overlay_register');
    const modalOverlayUpdate = document.getElementById('modal_overlay_update');
    const modalOverlayDelete = document.getElementById('modal_overlay_delete');
    const modalOverlaySell = document.getElementById('modal_overlay_sell');

    //Variables de fondo oscuro (Membresias)
    const modalOverlayMemberRegister = document.getElementById('modal_overlay_member_register');
    const modalOverlayMemberUpdate = document.getElementById('modal_overlay_member_update');
    const modalOverlayMemberDelete = document.getElementById('modal_overlay_member_delete');
    const modalOverlayMemberBuy = document.getElementById('modal_overlay_member_buy');

    const modalOverlayClientRegister = document.getElementById('modal_overlay_client_register');
    const modalOverlayClientUpdate = document.getElementById('modal_overlay_client_update');
    const modalOverlayClientDelete = document.getElementById('modal_overlay_client_delete');
    const modalOverlayClientAsistence = document.getElementById('modal_overlay_client_asistence');

    //Botones para activar modales (productos)
    const openRegisterModal = document.getElementById('up_product');
    const openUpdateModal = document.getElementById('update_product');
    const openDeleteModal = document.getElementById('delete_product');
    const openSellModal = document.getElementById('sell_product');

    //Botones para activar modales (Membresias)
    const openRegisterMember = document.getElementById('up_member');
    const openUpdateMember = document.getElementById('update_member');
    const openDeleteMember = document.getElementById('delete_member');
    const openBuyMember = document.getElementById('sell_member');

    //Botones para activar modales (Clientes)
    const openRegisterClient = document.getElementById('up_client');
    const openUpdateClient = document.getElementById('update_client');
    const openDeleteClient = document.getElementById('delete_client');
    const openAsistenceClient = document.getElementById('asistence_client');

    //Botones para cerrar el modal
    const closeModalButtons = document.querySelectorAll('.close_button');

    // Modales (productos)
    const updateModal = document.getElementById('modal_updater');
    const registerModal = document.getElementById('modal_register');
    const deleteModal = document.getElementById('modal_delete');
    const sellModal = document.getElementById('modal_sell');

    // Modales (Membresias)
    const modalRegisterMember = document.getElementById('modal_register_member');
    const modalUpdateMember = document.getElementById('modal_updater_member');
    const modalDeleteMember = document.getElementById('modal_delete_member');
    const modalBuyMember = document.getElementById('modal_buy_member');

    // Modales (Clientes)
    const modalRegisterClient = document.getElementById('modal_register_client');
    const modalUpdateClient = document.getElementById('modal_updater_client');
    const modalDeleteClient = document.getElementById('modal_delete_client');
    const modalAsistenceClient = document.getElementById('modal_asistence_client');

    //Botones para el envio de endpoint al servdor (Productos)
    let buttonInsertRegister = document.getElementById('insert_register');
    let buttonUpdateRegister = document.getElementById('update_register');
    let buttonDeleteRegister = document.getElementById('delete_register');
    let buttonSearchRegisterDelete = document.getElementById('search_register_delete');
    let buttonSearchRegisterUpdate = document.getElementById('search_register_update');

    //Botones para el envio de endpoint al servdor (Membresias)
    let buttonInsertMember = document.getElementById('insert_member');
    let buttonUpdateMember = document.getElementById('button_update_member')
    let buttonSearchMember = document.getElementById('search_member');
    let buttonDeleteMember = document.getElementById('delete_member_register');
    let buttonSearchMemberDelete = document.getElementById('search_member_delete');

    //Botones para el envio de endpoint al servidor (Clientes)
    let buttonInsertClient = document.getElementById('insert_client');
    let buttonUpdateClient = document.getElementById('button_update_client');
    let buttonSearchUpdateClient = document.getElementById('search_client');
    let buttonSearchDeleteClient = document.getElementById('search_client_delete');
    let buttonDeleteClient = document.getElementById('delete_client_register');

    //Variables del modal de venta de producto
    const searchCalculateButton = document.getElementById('search_calculate_button');
    const registerButton = document.getElementById('register_sell');
    const selectProduct = document.getElementById('id_product');
    const numberSellInput = document.getElementById('number_sell');
    const totalSell = document.getElementById('total_sell');
    const selectClient = document.getElementById('id_user');
    const dateSellInput = document.getElementById('date_sell');

    //Inputs del modal de registro (Membresias)
    let inputNameMember = document.getElementById('name_member');
    let inputPriceMember = document.getElementById('price_member');
    let inputDurationMember = document.getElementById('duration_member');
    let inputImageMember = document.getElementById('image_member');

    //Inputs del modal de actualizacion (Membresias)
    let inputIdUpdateMember = document.getElementById('id_input_member');
    let inputNameUpdateMember = document.getElementById('name_update_member');
    let inputPriceUpdateMember = document.getElementById('price_update_member');
    let inputDurationUpdateMember = document.getElementById('duration_update_member');

    //Inputs y labels del modal de eliminacion (Membresias)
    let searchInputMember = document.getElementById('search_input_member');
    let nameMemberDelete = document.getElementById('name_member_delete');
    let priceMemberDelete = document.getElementById('price_member_delete');
    let durationMemberDelete = document.getElementById('duration_member_delete');

    //Variables del modal de compra de membrecias
    let buttonCalculateMember = document.getElementById('search_calculate_member');
    let buttonRegisterBuyMember = document.getElementById('register_buy');
    let idUserMember = document.getElementById('id_user_member');
    let idMemberBuy = document.getElementById('id_member_buy');
    let dateBuyInput = document.getElementById('date_buy');
    let dateExpire = document.getElementById('date_expire');
    let totalBuy = document.getElementById('total_buy');

    //Inputs del modal de registro (Clientes)
    let inputNameClient = document.getElementById('name_client');
    let inputRfcClient = document.getElementById('rfc_client');

    //Inputs del modal de actualizacion (Clientes)
    let inputNameUpdateClient = document.getElementById('input_name_client');
    let inputRfcUpdateClient = document.getElementById('input_rfc_client');
    let inputIdSearchClient = document.getElementById('id_input_client');

    //Inputs y labels del modal de eliminacion (Clientes)
    let inputIdSearchClientDelete = document.getElementById('search_input_client_delete');
    let nameClientDelete = document.getElementById('name_client_delete');
    let rfcClientDelete = document.getElementById('rfc_client_delete');

    //Inputs del modal de asistencia (Clientes)
    let inputDateAsistence = document.getElementById('date_asistence');
    let selectIdUserClient = document.getElementById('id_user_client');
    let selectIdStatusClient = document.getElementById('id_asistence');
    let buttonRegisterAsistence = document.getElementById('register_asistence');

    //Obtener e insertar fecha actual
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    const dateToday = document.querySelectorAll('.date_today');
    dateToday.forEach(date => {
        date.textContent = formattedDate;
    });

    //Abrir modal de registro (Productos)
    openRegisterModal.addEventListener('click', () => {

        modalOverlayRegister.classList.add('active');
        registerModal.style.display = 'block';
        
        let inputName = document.getElementById('name');
        let inputDescription = document.getElementById('description');
        let inputPrice = document.getElementById('price');
        let inputStock = document.getElementById('stock');
        let inputImage = document.getElementById('image');

        function validateForm() {

            if (inputName.value.trim() !== ''
                && inputDescription.value.trim()!== ''
                && inputPrice.value.trim()!== ''
                && inputStock.value.trim() !== '') {

                    buttonInsertRegister.disabled = false;
                    inputImage.disabled = false;

            } else {

                buttonInsertRegister.disabled = true;
                inputImage.disabled = true;

            }

        }

        validateForm();

        [inputName, inputDescription, inputPrice, inputStock].forEach(field => {

            field.addEventListener('input', validateForm);

        });

    });

    //Abrir el modal de registro (membresias)
    openRegisterMember.addEventListener('click', () => {

        modalOverlayMemberRegister.classList.add('active');
        modalRegisterMember.style.display = 'block';

        function validateForm() {

            if( inputNameMember.value.trim() !== ''
                && inputPriceMember.value.trim()!== ''
                && inputDurationMember.value.trim()!== '') {

                    buttonInsertMember.disabled = false;
                    inputImageMember.disabled = false;

            } else {

                buttonInsertMember.disabled = true;
                inputImageMember.disabled = true;

            }

        }

        validateForm();

        [inputNameMember, inputPriceMember, inputDurationMember].forEach(field => {

            field.addEventListener('input', validateForm);

        });

    });

    //Abrir modal de registro (Clientes)
    openRegisterClient.addEventListener('click', () => {

        modalOverlayClientRegister.classList.add('active');
        modalRegisterClient.style.display = 'block';

        function validateForm() {

            if (inputNameClient.value.trim() !== ''
                && inputRfcClient.value.trim() !== '') {

                    buttonInsertClient.disabled = false;

            } else {

                buttonInsertClient.disabled = true;

            }

        }

        validateForm();

        [inputNameClient, inputRfcClient].forEach(field => {

            field.addEventListener('input', validateForm);

        });

    });

    // Abrir modal de actualización (Productos)
    openUpdateModal.addEventListener('click', () => {

        modalOverlayUpdate.classList.add('active');
        updateModal.style.display = 'block';

        let inputName = document.getElementById('name_update');
        let inputDescription = document.getElementById('description_update');
        let inputPrice = document.getElementById('price_update');
        let inputStock = document.getElementById('stock_update');
        let inputId = document.getElementById('id_input');

        //Validacion de entrada de ID
        function validateId() {

            if (inputId.value.trim() !== '') {

                buttonSearchRegisterUpdate.disabled = false;

            } else {

                buttonSearchRegisterUpdate.disabled = true;

            }

        }

        validateId();

        inputId.addEventListener('input', validateId);

        function validateForm() {

            if (inputName.value.trim() !== ''
                && inputDescription.value.trim()!== ''
                && inputPrice.value.trim()!== ''
                && inputStock.value.trim()!== ''
                && inputId.value.trim()!== '') {

                    buttonUpdateRegister.disabled = false;

            } else {

                buttonUpdateRegister.disabled = true;

            }

        }

        validateForm();

        [inputId, inputName, inputDescription, inputPrice, inputStock].forEach(field => {

            field.addEventListener('input', validateForm);

        });

    });

    //Abrir modal de actualizacion (Membresias)
    openUpdateMember.addEventListener('click', () => {

        modalOverlayMemberUpdate.classList.add('active');
        modalUpdateMember.style.display = 'block';

        //Validacion de entrada de ID
        function validateId() {

            if (inputIdUpdateMember.value.trim() !== '') {

                buttonSearchMember.disabled = false;

            } else {

                buttonSearchMember.disabled = true;

            }

        }

        validateId();

        inputIdUpdateMember.addEventListener('input', validateId);

        function validateForm() {

            if (inputIdUpdateMember.value.trim() !== ''
                && inputNameUpdateMember.value.trim() !== ''
                && inputPriceUpdateMember.value.trim() !== ''
                && inputDurationUpdateMember.value.trim() !== '') {

                    buttonUpdateMember.disabled = false;

            } else {

                buttonUpdateMember.disabled = true;

            }

        }

        validateForm();

        [inputIdUpdateMember, inputNameUpdateMember, inputPriceUpdateMember, inputDurationUpdateMember].forEach(field => {

            field.addEventListener('input', validateForm);

        });

    });

    //Abrir modal de actualizacion (Clientes)
    openUpdateClient.addEventListener('click', () => {

        modalOverlayClientUpdate.classList.add('active');
        modalUpdateClient.style.display = 'block';

        //Validacion de entrada de ID
        function validateId() {

            if (inputIdSearchClient.value.trim() !== '') {

                buttonSearchUpdateClient.disabled = false;

            } else {

                buttonSearchUpdateClient.disabled = true;

            }

        }
    
        validateId();

        inputIdSearchClient.addEventListener('input', validateId);

        function validateForm() {

            if (inputIdSearchClient.value.trim() !== ''
                && inputNameUpdateClient.value.trim() !== ''
                && inputRfcUpdateClient.value.trim() !== '') {

                    buttonUpdateClient.disabled = false;

            } else {

                buttonUpdateClient.disabled = true;

            }

        }

        validateForm();

        [inputIdSearchClient, inputNameUpdateClient, inputRfcUpdateClient].forEach(field => {

            field.addEventListener('input', validateForm);

        });

    });

    // Abrir modal de eliminación (Productos)
    openDeleteModal.addEventListener('click', () => {

        modalOverlayDelete.classList.add('active');
        deleteModal.style.display = 'block';

        let inputSearchId = document.getElementById('search_input');

        function validateForm() {

            if (inputSearchId.value.trim() !== '') {

                buttonDeleteRegister.disabled = false;
                buttonSearchRegisterDelete.disabled = false;

            } else {

                buttonDeleteRegister.disabled = true;
                buttonSearchRegisterDelete.disabled = true;

            }

        }

        validateForm();

        inputSearchId.addEventListener('input', validateForm);

    });

    //Abrir el modal de eliminacion (Membresias)
    openDeleteMember.addEventListener('click', () => {

        modalOverlayMemberDelete.classList.add('active');
        modalDeleteMember.style.display = 'block';

        function validateForm() {

            if (searchInputMember.value.trim() !== '') {

                buttonDeleteMember.disabled = false;
                buttonSearchMemberDelete.disabled = false;

            } else {

                buttonDeleteMember.disabled = true;
                buttonSearchMemberDelete.disabled = true;

            }

        }

        validateForm();

        searchInputMember.addEventListener('input', validateForm);

    });

    //Abrir el modal de eliminacion (Clientes)
    openDeleteClient.addEventListener('click', () => {

        modalOverlayClientDelete.classList.add('active');
        modalDeleteClient.style.display = 'block';

        function validateForm() {

            if (inputIdSearchClientDelete.value.trim() !== '') {

                buttonSearchDeleteClient.disabled = false;
                buttonDeleteClient.disabled = false;

            } else {

                buttonSearchDeleteClient.disabled = true;
                buttonDeleteClient.disabled = true;

            }

        }

        validateForm();

        inputIdSearchClientDelete.addEventListener('input', validateForm);

    });

    // Abrir modal de venta (Productos)
    openSellModal.addEventListener('click', () => {

        modalOverlaySell.classList.add('active');
        sellModal.style.display = 'block';

        //Llamado de funcion con ID
        getIdProductAndClient();

    });

    //Abrir el modal de compras (Membresias)
    openBuyMember.addEventListener('click', () => {

        modalOverlayMemberBuy.classList.add('active');
        modalBuyMember.style.display = 'block';

        //Llamado de funcion con ID
        getIdProductAndClient();

    });

    //Abrir el modal de asistencias (Clientes)
    openAsistenceClient.addEventListener('click', () => {

        modalOverlayClientAsistence.classList.add('active');
        modalAsistenceClient.style.display = 'block';

        //Llamado de funcion con ID
        getIdProductAndClient();

    });

    //Cerrar los modales
    closeModalButtons.forEach((button) => {

        button.addEventListener('click', () => {

            //Priductos
            modalOverlayRegister.classList.remove('active');
            modalOverlayUpdate.classList.remove('active');
            modalOverlayDelete.classList.remove('active');
            modalOverlaySell.classList.remove('active');

            //Membresias
            modalOverlayMemberRegister.classList.remove('active');
            modalOverlayMemberUpdate.classList.remove('active');
            modalOverlayMemberDelete.classList.remove('active');
            modalOverlayMemberBuy.classList.remove('active');

            //Clientes
            modalOverlayClientRegister.classList.remove('active');
            modalOverlayClientUpdate.classList.remove('active');
            modalOverlayClientDelete.classList.remove('active');
            modalOverlayClientAsistence.classList.remove('active');

            //Poductos
            registerModal.style.display = 'none';
            updateModal.style.display = 'none';
            deleteModal.style.display = 'none';
            sellModal.style.display = 'none';

            //Membresias
            modalRegisterMember.style.display = 'none';
            modalUpdateMember.style.display = 'none';
            modalDeleteMember.style.display = 'none';
            modalBuyMember.style.display = 'none';

            //Clientes
            modalRegisterClient.style.display = 'none';
            modalUpdateClient.style.display = 'none';
            modalDeleteClient.style.display = 'none';
            modalAsistenceClient.style.display = 'none';

        });

    });

    //Cerrar los modales al dar click fuera del modal
    [
        //Productos
        modalOverlayRegister, 
        modalOverlayUpdate, 
        modalOverlayDelete, 
        modalOverlaySell, 
        //Membresias
        modalOverlayMemberRegister,
        modalOverlayMemberUpdate,
        modalOverlayMemberDelete,
        modalOverlayMemberBuy,
        //Clientes
        modalOverlayClientRegister,
        modalOverlayClientUpdate,
        modalOverlayClientDelete,
        modalOverlayClientAsistence
        ]. forEach((overlay) => {

        overlay.addEventListener('click', (e) => {

            if (e.target === overlay) {

                overlay.classList.remove('active');
                //Productos
                registerModal.style.display = 'none';
                updateModal.style.display = 'none';
                deleteModal.style.display = 'none';
                sellModal.style.display = 'none';

                //Membresias
                modalRegisterMember.style.display = 'none';
                modalUpdateMember.style.display = 'none';
                modalDeleteMember.style.display = 'none';
                modalBuyMember.style.display = 'none';

                //Clientes
                modalRegisterClient.style.display = 'none';
                modalUpdateClient.style.display = 'none';
                modalDeleteClient.style.display = 'none';
                modalAsistenceClient.style.display = 'none';

            }

        });

    });

    //Ocultar menus
    function hideMenus() {

        product_context.style.display = 'none';
        members_context.style.display = 'none';
        users_context.style.display = 'none';
    }

    //Funcion general para mostrar menus contextuales
    function showMenu(menu) {

        hideMenus();
        menu.style.display = 'block';

    }

    //Menu cargado por defecto
    showMenu(product_context, getNewProducts(), productsList(), sellsList());

    //Menu de acciones sobre producto
    button_product.addEventListener('click', function() {

        showMenu(product_context);
        getNewProducts();
        productsList();
        sellsList();

    });

    //Menu de acciones sobre membresias
    button_members.addEventListener('click', function() {

        showMenu(members_context);
        getNewMembers();
        membersList();
        buysList();

    });

    //Menu de acciones sobre clientes
    button_users.addEventListener('click', function() {

        showMenu(users_context);
        getNewClients();
        clientsList();
        asistenceList();

    });

    // -------------------------------- Listeners para metodos fetch --------------------------------
    //Registro de un nuevo producto
    buttonInsertRegister.addEventListener('click', function (event) {

        //Prevencion de envio por defecto
        event.preventDefault();

        let inputName = document.getElementById('name');
        let inputDescription = document.getElementById('description');
        let inputPrice = document.getElementById('price');
        let inputStock = document.getElementById('stock');
        let inputImage = document.getElementById('image');

        //Acciones sobre el boton
        buttonInsertRegister.disabled = true;
        buttonInsertRegister.textContent = 'Registrando Producto...';
        
        const formData = new FormData();
        formData.append('name', inputName.value);
        formData.append('description', inputDescription.value);
        formData.append('price', inputPrice.value);
        formData.append('stock', inputStock.value);
        formData.append('image', inputImage.files[0]);
        

        fetch('/insert_product', {

            method: 'POST',
            body: formData,

        })

        .then(response => {

            if (!response.ok) {

                throw new Error(`HTTP error! status: ${response.status}`)

            }

            return response.json();

        })
        .then(data => {

            if (data.success) {

                modalOverlayRegister.classList.remove('active');
                registerModal.style.display = 'none';

            } else {

                console.error("Error del servidor:", data.error);
                alert("Hubo un error al procesar tu solicitud.");

            }

        })
        .catch(error => {

            console.error("Error al procesar la solicitud:", error);
            alert("Hubo un error al enviar la solicitud.");

        })
        .finally(() => {

            buttonInsertRegister.disabled = false;
            buttonInsertRegister.textContent = 'Registrar producto'

        })

        inputName.value = '';
        inputDescription.value = '';
        inputPrice.value = '';
        inputStock.value = '';

    });

    //Busqueda de producto por ID para actualizar
    buttonSearchRegisterUpdate.addEventListener('click', function (event) {

        event.preventDefault();

        let inputId = document.getElementById('id_input');

        //Acciones del boton de busqueda
        buttonSearchRegisterUpdate.disabled = true;

        const id_product = {

            id: inputId.value
            
        }

        fetch('/search_product', {

            method: 'POST',
            headers: {

                'Content-Type': 'application/json',

            },
            body: JSON.stringify(id_product),

        })

        .then(response => {

            if (!response.ok) {

                throw new Error(`HTTP error! status: ${response.status}`)

            }

            return response.json();

        })
        .then(data => {

            console.log(data);

            let nameUpdate = document.getElementById('name_update');
            let descriptionUpdate = document.getElementById('description_update');
            let priceUpdate = document.getElementById('price_update');
            let stockUpdate = document.getElementById('stock_update');

            nameUpdate.value = data.product[0].nombre;
            descriptionUpdate.value = data.product[0].descripcion;
            priceUpdate.value = data.product[0].precio;
            stockUpdate.value = data.product[0].stock;

        })
        .catch(error => {

            console.error("Error al procesar la solicitud:", error);
            alert("Producto no encontrado, por favor intentalo de nuevo");

        })
        .finally(() => {

            buttonSearchRegisterUpdate.disabled = false;

        })

    });

    //Busqueda de producto por ID para borrar
    buttonSearchRegisterDelete.addEventListener('click', function(event) {

        event.preventDefault();
        
        let inputId = document.getElementById('search_input');

        //Acciones sobre el boton
        buttonSearchRegisterDelete.disabled = true;

        const id_product = {
            
            id: inputId.value

        };

        fetch('/search_product', {

            method: 'POST',
            headers: {
                
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(id_product),

        })

        .then(response => {

            if (!response.ok) {

                throw new Error(`HTTP error! status: ${response.status}`)

            }

            return response.json();

        })
        .then(data => {

            console.log(data);

            let nameUpdate = document.getElementById('name_product');
            let descriptionUpdate = document.getElementById('description_product');
            let priceUpdate = document.getElementById('price_product');
            let stockUpdate = document.getElementById('stock_product');

            nameUpdate.textContent = data.product[0].nombre;
            descriptionUpdate.textContent = data.product[0].descripcion;
            priceUpdate.textContent = data.product[0].precio;
            stockUpdate.textContent = data.product[0].stock;

        })
        .catch(error => {

            console.error("Error al procesar la solicitud:", error);
            alert("Producto no encontrado, por favor intentalo de nuevo");

        })
        .finally(() => {

            buttonSearchRegisterUpdate.disabled = false;

        })

    });

    //Actualizar producto
    buttonUpdateRegister.addEventListener('click', function (event) {

        event.preventDefault();

        //Valores de los inputs
        let inputId = document.getElementById('id_input');
        let nameUpdate = document.getElementById('name_update');
        let descriptionUpdate = document.getElementById('description_update');
        let priceUpdate = document.getElementById('price_update');
        let stockUpdate = document.getElementById('stock_update');

        //Acciones sobre el boton
        buttonUpdateRegister.disabled = true;
        buttonUpdateRegister.textContent = 'Actualizando Producto...';

        //Creacion del objeto para actualizar
        const formData = new FormData();

        formData.append('id', inputId.value);
        formData.append('new_name', nameUpdate.value);
        formData.append('new_description', descriptionUpdate.value);
        formData.append('new_price', priceUpdate.value);
        formData.append('new_stock', stockUpdate.value);

        fetch('/update_product', {

            method: 'POST',
            body: formData,

        })

        .then(response => {

            if (!response.ok) {

                throw new Error(`HTTP error! status: ${response.status}`)

            }

            return response.json();

        })
        .then(data => {

            if (data.success) {

                modalOverlayUpdate.classList.remove('active');
                updateModal.style.display = 'none';

            } else {

                console.error("Error del servidor:", data.error);
                alert("Hubo un error al procesar tu solicitud.");

            }

        })
        .catch(error => {

            console.error("Error al procesar la solicitud:", error);
            alert("Hubo un error al enviar la solicitud.");

        })
        .finally(() => {

            buttonUpdateRegister.disabled = false;
            buttonUpdateRegister.textContent = 'Registrar producto'

        })

    });

    //Eliminar producto
    buttonDeleteRegister.addEventListener('click', function (event) {

        event.preventDefault();

        let inputId = document.getElementById('search_input');
        
        //Acciones sobre el boton
        buttonDeleteRegister.disabled = true;
        buttonDeleteRegister.textContent = 'Eliminando Producto...';

        //Creacion del objeto para eliminar
        const id_product = {
            
            id: inputId.value

        }
        
        fetch('/delete_product', {
            
            method: 'POST',
            headers: {
                
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(id_product)

        })

        .then(response => {

            if (!response.ok) {

                throw new Error(`HTTP error! status: ${response.status}`)

            }

            return response.json();

        })
        .then(data => {

            if (data.success) {

                modalOverlayDelete.classList.remove('active');
                deleteModal.style.display = 'none';

            } else {

                console.error("Error del servidor:", data.error);
                alert("Hubo un error al procesar tu solicitud.");

            }

        })
        .catch(error => {

            console.error("Error al procesar la solicitud:", error);
            alert("Hubo un error al enviar la solicitud.");

        })
        .finally(() => {

            buttonDeleteRegister.disabled = false;
            buttonDeleteRegister.textContent = 'Registrar producto'

        })

    });

    // Función para calcular el total a pagar (Productos)
    searchCalculateButton.addEventListener('click', function () {

        const selectedProductId = selectProduct.value;
        const unitsSold = numberSellInput.value;

        if (!selectedProductId || !unitsSold || unitsSold <= 0) {

            alert("Por favor, selecciona un producto y una cantidad válida.");
            return;

        }

        fetch(`/get_product_price/${selectedProductId}`)

        .then(response => {

            if (!response.ok) {

                throw new Error(`Error en la respuesta del servidor: ${response.status}`);

            }
            return response.json();
        })

        .then(data => {

            console.log(data);

            if (data.success) {

                const productPrice = parseFloat(data.price);

                //Validar que la conversion del texto funcione para la multiplicacion
                if(isNaN(productPrice)) {

                    alert("El precio del producto no es valido");
                    return;

                }

                const total = productPrice * unitsSold;
                totalSell.textContent = `$${total.toFixed(2)}`;

            } else {

                alert("No se pudo obtener el precio del producto.");

            }

        })
        .catch(error => {

            console.error("Error al calcular el total:", error);

        });

    });

    // Función para registrar la venta
    registerButton.addEventListener('click', function () {

        //Obtencion de los valores del formulario
        const selectedClientId = selectClient.value;
        const selectedProductId = selectProduct.value;
        const unitsSold = numberSellInput.value;
        const totalToPay = totalSell.textContent.replace('$', '').trim();
        const sellDate = dateSellInput.value;

        registerButton.disabled = true;
        registerButton.textContent = 'Registrando Venta...';

        //Validacion de los valores del formulario
        if (!selectedClientId || !selectedProductId || !unitsSold || !sellDate || unitsSold <= 0) {

            alert("Por favor, completa todos los campos correctamente.");
            return;

        }

        const formData = new FormData();
        formData.append('client_id', selectedClientId);
        formData.append('product_id', selectedProductId);
        formData.append('units_sold', unitsSold);
        formData.append('total_price', totalToPay);
        formData.append('sell_date', sellDate);

        fetch('/register_sale', {

            method: 'POST',
            body: formData,

        })
        .then(response => {

            if (!response.ok) {

                throw new Error(`Error en la respuesta del servidor: ${response.status}`);

            }
            return response.json();

        })
        .then(data => {

            if (data.success) {

                // alert("Venta registrada con éxito.");
                modalOverlaySell.classList.remove('active');
                sellModal.style.display = 'none';

            } else {

                alert("Error al registrar la venta.");

            }

        })
        .catch(error => {

            console.error("Error al registrar la venta:", error);

        });

    });

    //Registro de una nueva membresia
    buttonInsertMember.addEventListener('click', function(event) {

        //Prevencion de envio por defecto
        event.preventDefault();

        buttonInsertMember.disabled = true;
        buttonInsertMember.textContent = 'Agregando Membresía...';

        const formData = new FormData();
        formData.append('name', inputNameMember.value);
        formData.append('price', inputPriceMember.value);
        formData.append('duration', inputDurationMember.value);
        formData.append('img_member', inputImageMember.files[0]);

        fetch('/insert_member', {

            method: 'POST',
            body: formData,

        })

        .then(response => {

            if (!response.ok) {

                throw new Error(`HTTP error! status: ${response.status}`)

            }

            return response.json();

        })
        .then(data => {

            if (data.success) {

                modalOverlayMemberRegister.classList.remove('active');
                modalRegisterMember.style.display = 'none';

            } else {

                console.error("Error del servidor:", data.error);
                alert("Hubo un error al procesar tu solicitud.");

            }

        })
        .catch(error => {

            console.error("Error al procesar la solicitud:", error);
            alert("Hubo un error al enviar la solicitud.");

        })
        .finally(() => {

            buttonInsertMember.disabled = false;
            buttonInsertMember.textContent = 'Registrar producto'

        })

        inputNameMember.value = '';
        inputPriceMember.value = '';
        inputDurationMember.value = '';
        inputImageMember.value = '';

    })

    //Busqueda de membresia por ID para actualizar
    buttonSearchMember.addEventListener('click', function(event) {

        event.preventDefault();

        buttonSearchMember.disabled = true;

        const id_member = {

            id: inputIdUpdateMember.value

        }

        fetch('/search_member', {

            method: 'POST',
            headers: {

                'Content-Type': 'application/json',

            },
            body: JSON.stringify(id_member),

        })

        .then(response => {

            if (!response.ok) {

                throw new Error(`HTTP error! status: ${response.status}`)

            }

            return response.json();

        })
        .then(data => {

            console.log(data);

            inputNameUpdateMember.value = data.member[0].nombre;
            inputPriceUpdateMember.value = data.member[0].costo;
            inputDurationUpdateMember.value = data.member[0].duracion_dias;

        })
        .catch(error => {

            console.error("Error al procesar la solicitud:", error);
            alert("Membresia no encontrada, por favor intentalo de nuevo");

        })
        .finally(() => {

            buttonSearchMember.disabled = false;

        })

    });

    //Actualizacion de membresia
    buttonUpdateMember.addEventListener('click', function(event) {

        event.preventDefault();

        buttonUpdateMember.disabled = true;
        buttonUpdateMember.textContent = 'Actualizando Membresía...';

        const formData = new FormData();
        formData.append('id', inputIdUpdateMember.value);
        formData.append('name', inputNameUpdateMember.value);
        formData.append('price', inputPriceUpdateMember.value);
        formData.append('duration', inputDurationUpdateMember.value);

        fetch('/update_member', {

            method: 'POST',
            body: formData,

        })

        .then(response => {

            if (!response.ok) {

                throw new Error(`HTTP error! status: ${response.status}`)

            }

            return response.json();

        })
        .then(data => {

            if (data.success) {

                modalOverlayMemberUpdate.classList.remove('active');
                modalUpdateMember.style.display = 'none';

            } else {

                console.error("Error del servidor:", data.error);
                alert("Hubo un error al procesar tu solicitud.");

            }

        })
        .catch(error => {

            console.error("Error al procesar la solicitud:", error);
            alert("Hubo un error al enviar la solicitud.");

        })
        .finally(() => {

            buttonUpdateMember.disabled = false;
            buttonUpdateMember.textContent = 'Registrar producto';

        })

    });

    //Busqueda de membresia para eliminar
    buttonSearchMemberDelete.addEventListener('click', function(event){

        event.preventDefault();

        buttonSearchMemberDelete.disabled = true;

        const id_member = {

            id: searchInputMember.value

        }

        fetch('/search_member', {

            method: 'POST',
            headers: {

                'Content-Type': 'application/json',

            },
            body: JSON.stringify(id_member),

        })

        .then(response => {

            if (!response.ok) {

                throw new Error(`HTTP error! status: ${response.status}`)

            }

            return response.json();

        })
        .then(data => {

            console.log(data);

            nameMemberDelete.textContent = data.member[0].nombre;
            priceMemberDelete.textContent = `$${data.member[0].costo}`;
            durationMemberDelete.textContent = `${data.member[0].duracion_dias} días`;

        })
        .catch(error => {

            console.error("Error al procesar la solicitud:", error);
            alert("Membresia no encontrada, por favor intentalo de nuevo");

        })
        .finally(() => {

            buttonSearchMemberDelete.disabled = false;

        })

    })

    //Eliminacion de membresia
    buttonDeleteMember.addEventListener('click', function(event) {

        event.preventDefault();

        buttonDeleteMember.disabled = true;
        buttonDeleteMember.textContent = 'Eliminando Membresía...';

        //Creacion del objeto para eliminar
        const id_member = {
            
            id: searchInputMember.value

        }
        
        fetch('/delete_member', {
            
            method: 'POST',
            headers: {
                
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(id_member)

        })

        .then(response => {

            if (!response.ok) {

                throw new Error(`HTTP error! status: ${response.status}`)

            }

            return response.json();

        })
        .then(data => {

            if (data.success) {

                modalOverlayMemberDelete.classList.remove('active');
                modalDeleteMember.style.display = 'none';

            } else {

                console.error("Error del servidor:", data.error);
                alert("Hubo un error al procesar tu solicitud.");

            }

        })
        .catch(error => {

            console.error("Error al procesar la solicitud:", error);
            alert("Hubo un error al enviar la solicitud.");

        })
        .finally(() => {

            buttonDeleteMember.disabled = false;
            buttonDeleteMember.textContent = 'Registrar producto'

        })

    })

    //Funcion para calcular el la fecha de expiracion
    buttonCalculateMember.addEventListener('click', function(event) {

        event.preventDefault();

        let selectedMembershipId = idMemberBuy.value;
        let purchaseDate = dateBuyInput.value;

        if (!selectedMembershipId || !purchaseDate) {

            alert('Por favor selecciona una membresia y una fecha de compra')
            return;

        }

        fetch(`/get_membership/${selectedMembershipId}`)

        .then(response => {

            if (!response.ok) {

                throw new Error(`Error en la respuesta del servidor: ${response.status}`)

            }

            return response.json();

        })

        .then(data => {

            if (data.success) {

                const { duracion_dias, costo } = data.membership;

                totalBuy.textContent = `$${costo}`;

                //Calcular la fecha de vencimiento
                const purchaseDateObj = new Date(purchaseDate);
                purchaseDateObj.setDate(purchaseDateObj.getDate() + duracion_dias);
                const expirationDate = purchaseDateObj.toISOString().split('T')[0];

                dateExpire.textContent = expirationDate;

            } else {

                alert('No se encontro la membresia seleccionada')
                
            }

        })
        .catch(error => {

            console.error("Error al buscar la membresía:", error)

        })

    });

    //Registrar compra de membresia
    buttonRegisterBuyMember.addEventListener('click', function(event) {

        event.preventDefault();

        const selectedClientId = idUserMember.value;
        const selectedMembershipId = idMemberBuy.value;
        const purchaseDate = dateBuyInput.value;
        const expirationDate = dateExpire.textContent;

        if (!selectedClientId || !selectedMembershipId || !purchaseDate || !expirationDate) {

            alert("Por favor, completa todos los campos correctamente.");
            return;

        }

        const purchaseData = {

            id_cliente: selectedClientId,
            id_membresia: selectedMembershipId,
            fecha_compra: purchaseDate,
            fecha_vencimiento: expirationDate

        };

        fetch('/register_purchase', {

            method: 'POST',
            headers: {

                'Content-Type': 'application/json'
            
            },
            body: JSON.stringify(purchaseData)

        })
        .then(response => {

            if (!response.ok) {

                throw new Error(`Error en la respuesta del servidor: ${response.status}`);
            
            }

            return response.json();
        })
        .then(data => {

            if (data.success) {

                alert("Compra registrada con éxito.");
                document.getElementById('modal_overlay_member_buy').classList.remove('active');
            
            } else {

                alert("Error al registrar la compra.");
            
            }

        })
        .catch(error => {

            console.error("Error al registrar la compra:", error);
        
        });

    })

    //Registro de clientes
    buttonInsertClient.addEventListener('click', function(event) {

        event.preventDefault();

        buttonInsertClient.disabled = true;
        buttonInsertClient.textContent = 'Registrando cliente...';

        const formData = new FormData();
        formData.append('name', inputNameClient.value);
        formData.append('rfc', inputRfcClient.value);

        fetch('/insert_client', {

            method: 'POST',
            body: formData,

        })

        .then(response => {

            if (!response.ok) {

                throw new Error(`HTTP error! status: ${response.status}`)

            }

            return response.json();

        })
        .then(data => {

            if (data.success) {

                modalOverlayClientRegister.classList.remove('active');
                modalRegisterClient.style.display = 'none';

            } else {

                console.error("Error del servidor:", data.error);
                alert("Hubo un error al procesar tu solicitud.");

            }

        })
        .catch(error => {

            console.error("Error al procesar la solicitud:", error);
            alert("Hubo un error al enviar la solicitud.");

        })
        .finally(() => {

            buttonInsertClient.disabled = false;
            buttonInsertClient.textContent = 'Registrar producto'

        })

    });

    //Busqueda por id de clientes para actualizar
    buttonSearchUpdateClient.addEventListener('click', function(event) {

        event.preventDefault();

        buttonSearchUpdateClient.disabled = true;

        let id = {

            id: inputIdSearchClient.value

        }

        fetch('/search_client', {

            method: 'POST',
            headers: {

                'Content-Type': 'application/json',

            },
            body: JSON.stringify(id),

        })

        .then(response => {

            if (!response.ok) {

                throw new Error(`HTTP error! status: ${response.status}`)

            }

            return response.json();

        })
        .then(data => {

            // console.log(data);

            inputNameUpdateClient.value = data.client[0].nombre;
            inputRfcUpdateClient.value = data.client[0].rfc;

        })
        .catch(error => {

            console.error("Error al procesar la solicitud:", error);
            alert("Cliente no encontrado, por favor intentalo de nuevo");

        })
        .finally(() => {

            buttonSearchUpdateClient.disabled = false;

        })

    });

    //Actualizar cliente
    buttonUpdateClient.addEventListener('click', function(event) {

        event.preventDefault();

        buttonUpdateClient.disabled = true;
        buttonUpdateClient.textContent = 'Actualizando cliente...';

        const formData = new FormData();
        formData.append('id', inputIdSearchClient.value);
        formData.append('name', inputNameUpdateClient.value);
        formData.append('rfc', inputRfcUpdateClient.value);

        fetch('/update_client', {

            method: 'POST',
            body: formData,

        })

        .then(response => {

            if (!response.ok) {

                throw new Error(`HTTP error! status: ${response.status}`)

            }

            return response.json();

        })
        .then(data => {

            if (data.success) {

                modalOverlayClientUpdate.classList.remove('active');
                modalUpdateClient.style.display = 'none';

            } else {

                console.error("Error del servidor:", data.error);
                alert("Hubo un error al procesar tu solicitud.");

            }

        })
        .catch(error => {

            console.error("Error al procesar la solicitud:", error);
            alert("Hubo un error al enviar la solicitud.");

        })
        .finally(() => {

            buttonUpdateClient.disabled = false;
            buttonUpdateClient.textContent = 'Registrar producto';

        })

    });

    //Busqueda por id de clientes para actualizar
    buttonSearchDeleteClient.addEventListener('click', function(event) {

        event.preventDefault();

        buttonSearchDeleteClient.disabled = true;

        let id = {

            id: inputIdSearchClientDelete.value

        }

        fetch('/search_client', {

            method: 'POST',
            headers: {

                'Content-Type': 'application/json',

            },
            body: JSON.stringify(id),

        })

        .then(response => {

            if (!response.ok) {

                throw new Error(`HTTP error! status: ${response.status}`)

            }

            return response.json();

        })
        .then(data => {

            // console.log(data);

            nameClientDelete.textContent = data.client[0].nombre;
            rfcClientDelete.textContent = data.client[0].rfc;

        })
        .catch(error => {

            console.error("Error al procesar la solicitud:", error);
            alert("Cliente no encontrado, por favor intentalo de nuevo");

        })
        .finally(() => {

            buttonSearchUpdateClient.disabled = false;

        })

    });

    //Eliminar cliente
    buttonDeleteClient.addEventListener('click', function(event) {

        event.preventDefault();

        buttonDeleteClient.disabled = true;
        buttonDeleteClient.textContent = 'Eliminando cliente...';

        let id = {

            id: inputIdSearchClientDelete.value

        }

        fetch('/delete_client', {
            
            method: 'POST',
            headers: {
                
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(id)

        })

        .then(response => {

            if (!response.ok) {

                throw new Error(`HTTP error! status: ${response.status}`)

            }

            return response.json();

        })
        .then(data => {

            if (data.success) {

                modalOverlayClientDelete.classList.remove('active');
                modalDeleteClient.style.display = 'none';

            } else {

                console.error("Error del servidor:", data.error);
                alert("Hubo un error al procesar tu solicitud.");

            }

        })
        .catch(error => {

            console.error("Error al procesar la solicitud:", error);
            alert("Hubo un error al enviar la solicitud.");

        })
        .finally(() => {

            buttonDeleteClient.disabled = false;
            buttonDeleteClient.textContent = 'Registrar producto'

        })

    });

    //Registro de asistencias
    buttonRegisterAsistence.addEventListener('click', function(event) {

        event.preventDefault();

        buttonRegisterAsistence.disabled = true;
        buttonRegisterAsistence.textContent = 'Registrando asistencia...';

        const dateSelected = inputDateAsistence.value;
        const idClientSelected = selectIdUserClient.value;
        const statusSelected = selectIdStatusClient.value;

        if (!dateSelected || !idClientSelected || !statusSelected) {

            alert("Por favor, completa todos los campos correctamente.");
            return;

        }

        let dataAsistence = {

            id_client: idClientSelected,
            date: dateSelected,
            status: statusSelected

        }

        fetch('/register_asistence', {

            method: 'POST',
            headers: {

                'Content-Type': 'application/json'
            
            },
            body: JSON.stringify(dataAsistence)

        })
        .then(response => {

            if (!response.ok) {

                throw new Error(`Error en la respuesta del servidor: ${response.status}`);
            
            }

            return response.json();
        })
        .then(data => {

            if (data.success) {

                modalOverlayClientAsistence.classList.remove('active');
                modalAsistenceClient.style.display = 'none';
            
            } else {

                alert("Error al registrar la compra.");
            
            }

        })
        .catch(error => {

            console.error("Error al registrar la compra:", error);
        
        });

    })

});

//Variables para insercion de JSON en HTML (Cards de productos)
let imgCard1 = document.getElementById('img_card_1');
let imgCard2 = document.getElementById('img_card_2');
let imgCard3 = document.getElementById('img_card_3');
let imgCard4 = document.getElementById('img_card_4');

let titleCard1 = document.getElementById('title_card_1');
let titleCard2 = document.getElementById('title_card_2');
let titleCard3 = document.getElementById('title_card_3');
let titleCard4 = document.getElementById('title_card_4');

let priceCard1 = document.getElementById('price_card_1');
let priceCard2 = document.getElementById('price_card_2');
let priceCard3 = document.getElementById('price_card_3');
let priceCard4 = document.getElementById('price_card_4');

let descripcionCard4 = document.getElementById('description_card_4');
let descripcionCard1 = document.getElementById('description_card_1');
let descripcionCard2 = document.getElementById('description_card_2');
let descripcionCard3 = document.getElementById('description_card_3');

//Variables para insercion de JSON en HTML (Cards de membresias)
let imgCardMember1 = document.getElementById('img_card_1_member');
let imgCardMember2 = document.getElementById('img_card_2_member');
let imgCardMember3 = document.getElementById('img_card_3_member');
let imgCardMember4 = document.getElementById('img_card_4_member');

let titleCardMember1 = document.getElementById('title_card_1_member');
let titleCardMember2 = document.getElementById('title_card_2_member');
let titleCardMember3 = document.getElementById('title_card_3_member');
let titleCardMember4 = document.getElementById('title_card_4_member');

let priceCardMember1 = document.getElementById('price_card_1_member');
let priceCardMember2 = document.getElementById('price_card_2_member');
let priceCardMember3 = document.getElementById('price_card_3_member');
let priceCardMember4 = document.getElementById('price_card_4_member');

let descriptionCardMember1 = document.getElementById('description_card_1_member');
let descriptionCardMember2 = document.getElementById('description_card_2_member');
let descriptionCardMember3 = document.getElementById('description_card_3_member');
let descriptionCardMember4 = document.getElementById('description_card_4_member');

//Variables para insercion de JSON en HTML (Cards de clientes)
let titleCardClient1 = document.getElementById('title_card_1_client');
let titleCardClient2 = document.getElementById('title_card_2_client');
let titleCardClient3 = document.getElementById('title_card_3_client');
let titleCardClient4 = document.getElementById('title_card_4_client');
let titleCardClient5 = document.getElementById('title_card_5_client');

let descriptionCardClient1 = document.getElementById('description_card_1_client');
let descriptionCardClient2 = document.getElementById('description_card_2_client');
let descriptionCardClient3 = document.getElementById('description_card_3_client');
let descriptionCardClient4 = document.getElementById('description_card_4_client');
let descriptionCardClient5 = document.getElementById('description_card_5_client');


//Obtencion de los 4 productos mas recientes
function getNewProducts() {

    fetch('/new_products')
    
    .then( response => {

        if (!response.ok) {

            throw new Error(`HTTP error! status: ${response.status}`)

        }

        return response.json();

    })

    .then(data => {

        console.log(data);
        imgCard1.src = data.product[0].img_producto;
        imgCard2.src = data.product[1].img_producto;
        imgCard3.src = data.product[2].img_producto;
        imgCard4.src = data.product[3].img_producto;

        titleCard1.textContent = data.product[0].nombre;
        titleCard2.textContent = data.product[1].nombre;
        titleCard3.textContent = data.product[2].nombre;
        titleCard4.textContent = data.product[3].nombre;

        priceCard1.textContent = '$' + data.product[0].precio;
        priceCard2.textContent = '$' + data.product[1].precio;
        priceCard3.textContent = '$' + data.product[2].precio;
        priceCard4.textContent = '$' + data.product[3].precio;

        descripcionCard1.textContent = data.product[0].descripcion;
        descripcionCard2.textContent = data.product[1].descripcion;
        descripcionCard3.textContent = data.product[2].descripcion;
        descripcionCard4.textContent = data.product[3].descripcion;

    })

}

//Obtencion de las 4 membresias mas recientes
function getNewMembers() {

    fetch('/new_members')
    
    .then( response => {

        if (!response.ok) {

            throw new Error(`HTTP error! status: ${response.status}`)

        }

        return response.json();

    })

    .then(data => {

        console.log(data);
        imgCardMember1.src = data.member[0].img_membresia;
        imgCardMember2.src = data.member[1].img_membresia;
        imgCardMember3.src = data.member[2].img_membresia;
        imgCardMember4.src = data.member[3].img_membresia;

        titleCardMember1.textContent = data.member[0].nombre;
        titleCardMember2.textContent = data.member[1].nombre;
        titleCardMember3.textContent = data.member[2].nombre;
        titleCardMember4.textContent = data.member[3].nombre;

        priceCardMember1.textContent = '$' + data.member[0].costo;
        priceCardMember2.textContent = '$' + data.member[1].costo;
        priceCardMember3.textContent = '$' + data.member[2].costo;
        priceCardMember4.textContent = '$' + data.member[3].costo;

        descriptionCardMember1.textContent = data.member[0].duracion_dias + ' dias';
        descriptionCardMember2.textContent = data.member[1].duracion_dias + ' dias';
        descriptionCardMember3.textContent = data.member[2].duracion_dias + ' dias';
        descriptionCardMember4.textContent = data.member[3].duracion_dias + ' dias';

    })

}

function getNewClients() {

    fetch('/new_clients')
    
    .then( response => {

        if (!response.ok) {

            throw new Error(`HTTP error! status: ${response.status}`)

        }

        return response.json();

    })

    .then(data => {

        console.log(data);

        titleCardClient1.textContent = data.client[0].nombre;
        titleCardClient2.textContent = data.client[1].nombre;
        titleCardClient3.textContent = data.client[2].nombre;
        titleCardClient4.textContent = data.client[3].nombre;
        titleCardClient5.textContent = data.client[4].nombre;

        descriptionCardClient1.textContent = data.client[0].rfc;
        descriptionCardClient2.textContent = data.client[1].rfc;
        descriptionCardClient3.textContent = data.client[2].rfc;
        descriptionCardClient4.textContent = data.client[3].rfc;
        descriptionCardClient5.textContent = data.client[4].rfc;

    })

}

//Obtencion de todos los productos para la tabla catalogo
function productsList() {

    fetch('/products_list')
    
    .then(response => {

        if (!response.ok) {
    
            throw new Error(`HTTP error! status: ${response.status}`)
    
        }
    
        return response.json();

    })

    .then(data => {

        console.log(data);

        const tableBody = document.getElementById('body_list_products');
        tableBody.innerHTML = '';

        const productsListExtracted = data.product;

        productsListExtracted.forEach(row => {

            let idProduct = row.id_producto || 'N/A';
            let nameProduct = row.nombre || 'Sin nombre';
            let descriptionProduct = row.descripcion || 'Sin descripcion';
            let priceProduct = row.precio || 'N/A';
            let stockProduct = row.stock || 'Vacio';
            let imageProduct = row.img_producto || 'Sin imagen';

            const tableRow = document.createElement('tr');

            tableRow.innerHTML = `
            
            <td>PVF00${idProduct}</td>
            <td>${nameProduct}</td>
            <td>${descriptionProduct}</td>
            <td>$ ${priceProduct}</td>
            <td>${stockProduct}</td>
            <td><a href="${imageProduct}">Imagen</a></td>
            
            `;

            tableBody.appendChild(tableRow);

        });

        setupImagePreview();

    })

}

//Obtencion de todas las mebresias para la tabla catalogo
function membersList() {

    fetch('/members_list')
    
    .then(response => {

        if (!response.ok) {
    
            throw new Error(`HTTP error! status: ${response.status}`)
    
        }
    
        return response.json();

    })

    .then(data => {

        console.log(data);

        const tableBody = document.getElementById('body_list_members');
        tableBody.innerHTML = '';

        const productsListExtracted = data.member;

        productsListExtracted.forEach(row => {

            let idMember = row.id_membresia || 'N/A';
            let nameMember = row.nombre || 'Sin nombre';
            let priceMember = row.costo || 'N/A';
            let durationMember = row.duracion_dias || 'Vacio';
            let imageMember = row.img_membresia || 'Sin imagen';

            const tableRow = document.createElement('tr');

            tableRow.innerHTML = `
            
            <td>PVF00${idMember}</td>
            <td>${nameMember}</td>
            <td>$ ${priceMember}</td>
            <td>${durationMember}</td>
            <td><a href="${imageMember}">Imagen</a></td>
            
            `;

            tableBody.appendChild(tableRow);

        });

        setupImagePreview();

    })

}

//Obtencion de todos los clientes para tabla de registro
function clientsList() {

    fetch('/clients_list')
    
    .then(response => {

        if (!response.ok) {
    
            throw new Error(`HTTP error! status: ${response.status}`)
    
        }
    
        return response.json();

    })

    .then(data => {

        // console.log(data);

        const tableBody = document.getElementById('body_list_clients');
        tableBody.innerHTML = '';

        const productsListExtracted = data.client;

        productsListExtracted.forEach(row => {

            let idClient = row.id_cliente || 'N/A';
            let nameClient = row.nombre || 'Sin nombre';
            let rfc = row.rfc || 'N/A';
            let created_at = row.created_at || 'Sin fecha';

            const tableRow = document.createElement('tr');

            tableRow.innerHTML = `
            
            <td>CVF00${idClient}</td>
            <td>${nameClient}</td>
            <td>${rfc}</td>
            <td>${created_at.split('T')[0]}</td>            
            `;

            tableBody.appendChild(tableRow);

        });

    })

}

//Obtencion de todos los datos para el registro de ventas de productos
function sellsList() {

    fetch('/sells_list')
    
    .then(response => {

        if (!response.ok) {
    
            throw new Error(`HTTP error! status: ${response.status}`)
    
        }
    
        return response.json();

    })

    .then(data => {

        console.log(data);

        const tableBody = document.getElementById('body_list_sells');
        tableBody.innerHTML = '';

        const productsListExtracted = data.sell;

        productsListExtracted.forEach(row => {

            let idSell = row.id_venta || 'N/A';
            let idClient = row.id_cliente || 'Sin nombre';
            let idProducto = row.id_producto || 'Sin descripcion';
            let sellStock = row.cantidad || 'Vacio';
            let dateSell = row.fecha_venta || 'N/A';
            let totalSell = row.total || 'Sin imagen';

            const tableRow = document.createElement('tr');

            tableRow.innerHTML = `
            
            <td>VVF00${idSell}</td>
            <td>CVF00${idClient}</td>
            <td>PVD00${idProducto}</td>
            <td>${sellStock}</td>
            <td>${dateSell.split('T')[0]}</td>
            <td>${totalSell}</td>
            `;

            tableBody.appendChild(tableRow);

        });

    })

}

function buysList() {

    fetch('/buys_list')
    
    .then(response => {

        if (!response.ok) {
    
            throw new Error(`HTTP error! status: ${response.status}`)
    
        }
    
        return response.json();

    })

    .then(data => {

        console.log(data);

        const tableBody = document.getElementById('body_list_buys');
        tableBody.innerHTML = '';

        const productsListExtracted = data.buy;

        productsListExtracted.forEach(row => {

            let idBuy = row.id_compra || 'N/A';
            let idClient = row.id_cliente || 'Sin nombre';
            let idMember = row.id_membresia || 'Sin membresia';
            let dateBuy = row.fecha_inicio || 'Sin fecha';
            let dateEnd = row.fecha_fin || 'Sin fecha';

            const tableRow = document.createElement('tr');

            tableRow.innerHTML = `
            
            <td>BVF00${idBuy}</td>
            <td>CVF00${idClient}</td>
            <td>MVD00${idMember}</td>
            <td>${dateBuy.split('T')[0]}</td>
            <td>${dateEnd.split('T')[0]}</td>
            `;

            tableBody.appendChild(tableRow);

        });

    })

}

function asistenceList() {

    fetch('/asistence_list')
    
    .then(response => {

        if (!response.ok) {
    
            throw new Error(`HTTP error! status: ${response.status}`)
    
        }
    
        return response.json();

    })

    .then(data => {

        // console.log(data);

        const tableBody = document.getElementById('body_list_asistence');
        tableBody.innerHTML = '';

        const productsListExtracted = data.asistence;

        productsListExtracted.forEach(row => {

            let idAsistence = row.id_asistencia || 'N/A';
            let idClient = row.id_cliente || 'Sin nombre';
            let dateAsistence = row.fecha_asistencia || 'Sin fecha';
            let status = row.estado || 'Sin fecha';

            const tableRow = document.createElement('tr');

            tableRow.innerHTML = `
            
            <td>AVF00${idAsistence}</td>
            <td>CVF00${idClient}</td>
            <td>${dateAsistence.split('T')[0]}</td>
            <td>${status}</td>
            `;

            tableBody.appendChild(tableRow);

        });

    })

}

//Previsualizador de imagen en tablas
function setupImagePreview() {

    const links = document.querySelectorAll('td a');
    const previewBox = document.getElementById('image_preview');

    links.forEach(link => {

        link.addEventListener('mouseover', function (event) {

            const imgSrc = link.getAttribute('href');
            previewBox.innerHTML = `<img src="${imgSrc}" alt="Vista previa" style="max-width: 200px; max-height: 200px;">`;
            previewBox.style.display = 'block';

        });

        link.addEventListener('mousemove', function (event) {

            const x = event.pageX + 15;
            const y = event.pageY + 15;
            previewBox.style.left = `${x}px`;
            previewBox.style.top = `${y}px`;

        });

        link.addEventListener('mouseout', function () {

            previewBox.style.display = 'none';
            previewBox.innerHTML = '';

        });

    });
    
}

//Etiqueta select del HTML (Productos)
const selectClient = document.getElementById('id_user');
const selectProduct = document.getElementById('id_product');

//Etiqueta select del HTML (Membresias)
const selectClientMember = document.getElementById('id_user_member');
const selectMemberBuy = document.getElementById('id_member_buy');

//Etiqueta select del HTML (Asistencias)
let selectAsistenceClient = document.getElementById('id_user_client');
let selectAsistenceStatus = document.getElementById('id_asistence');

//Función para insertar ID en los select del HTML
function getIdProductAndClient() {

    Promise.all([

        fetch('/get_id_product')
        .then( response => {
            
            if (!response.ok) {
    
            throw new Error(`HTTP error! status: ${response.status}`)
    
            }   
    
            return response.json();
    
        }),

        fetch('/get_id_client')
        .then( response => {

            if (!response.ok) {
    
                throw new Error(`HTTP error! status: ${response.status}`)
        
            }   
        
            return response.json();

        }),

        fetch('/get_id_member')
        .then( response => {

            if (!response.ok) {
    
                throw new Error(`HTTP error! status: ${response.status}`)
        
            }   
        
            return response.json();

        })

    ])
    .then(([dataProduct, dataClient, dataMember]) => {

        selectClient.innerHTML = '';
        selectProduct.innerHTML = '';
        selectClientMember.innerHTML = '';
        selectMemberBuy.innerHTML = '';
        selectAsistenceClient.innerHTML = '';

        let extratedIdClient = dataClient.client;
        let extractedIdProduct = dataProduct.product;
        let extratedIdMember = dataMember.member;

        extratedIdClient.forEach(option => {

            optionToInsert = option.id_cliente || 'N/A';

            let optionElement = document.createElement('option');
            optionElement.value = optionToInsert;
            optionElement.textContent = `CVF00${optionToInsert}`;

            selectClient.appendChild(optionElement);

        })

        extratedIdClient.forEach(option => {

            optionToInsert = option.id_cliente || 'N/A';

            let optionElement = document.createElement('option');
            optionElement.value = optionToInsert;
            optionElement.textContent = `CVF00${optionToInsert}`;

            selectClientMember.appendChild(optionElement);

        })

        extratedIdClient.forEach(option => {

            optionToInsert = option.id_cliente || 'N/A';

            let optionElement = document.createElement('option');
            optionElement.value = optionToInsert;
            optionElement.textContent = `CVF00${optionToInsert}`;

            selectAsistenceClient.appendChild(optionElement);

        })

        extractedIdProduct.forEach(option => {

            optionToInsert = option.id_producto || 'N/A';

            let optionElement = document.createElement('option');
            optionElement.value = optionToInsert;
            optionElement.textContent = `PVF00${optionToInsert}`;

            selectProduct.appendChild(optionElement);

        })

        extratedIdMember.forEach(option => {

            optionToInsert = option.id_membresia || '';

            let optionElement = document.createElement('option');
            optionElement.value = optionToInsert;
            optionElement.textContent = `MVF00${optionToInsert}`;

            selectMemberBuy.appendChild(optionElement);

        });

    })
    .catch(error => console.error('Error en alguna de las solicitudes:', error));

}