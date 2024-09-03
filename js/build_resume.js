document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    var previewButton = document.querySelector('.resume-summary input[type="submit"]');
    previewButton.addEventListener('click', function (event) {
        event.preventDefault();

        const inputs = form.querySelectorAll('input, textarea');
        const formData = {};

        inputs.forEach(function (input) {
            const id = input.id;
            const value = input.value;
            formData[id] = value;
        });

        console.log(formData);

        var resumePdf = document.getElementById('resume_pdf');

        resumePdf.querySelector('.fname').textContent = formData.fname || '';
        resumePdf.querySelector('.lname').textContent = formData.lname || '';

        resumePdf.querySelector('.address').innerHTML = `${formData.address || ''}<br>${formData.city || ''}, ${formData.state || ''} ${formData['zip-code'] || ''}<br>${formData.country || ''}<br>${formData.email || ''}<br>${formData.phoneno || ''}`;

        resumePdf.querySelector('.job-title').textContent = formData['job-title'] || '';

        resumePdf.querySelector('.summary').textContent = formData.resume_summary || '';

        resumePdf.querySelector('.position .posi-inner').textContent = formData.position || '';
        resumePdf.querySelector('.company-inner').textContent = formData['company-name'] || '';
        resumePdf.querySelector('.pe-start-inner').textContent = formData['pe-start'] || '';
        resumePdf.querySelector('.pe-end').textContent = formData['pe-end'] || '';
        resumePdf.querySelector('.job-desc').textContent = formData['work-summary'] || '';

        resumePdf.querySelector('.degree-inner').textContent = formData.degree || '';
        resumePdf.querySelector('.school-inner').textContent = formData['school-name'] || '';
        resumePdf.querySelector('.start-inner').textContent = formData['start'] || '';
        resumePdf.querySelector('.end').textContent = formData['end'] || '';
        resumePdf.querySelector('.education-desc').textContent = formData['educational-summary'] || '';

        resumePdf.querySelector('.skill-item1').textContent = formData['skill-item1'] || '';
        const skillLevel1 = formData['skill-level1'];
        resumePdf.querySelector('.skill-level-inner1').style.width = `${skillLevel1}%` || '0%';
        resumePdf.querySelector('.skill-level-inner1').textContent = `${skillLevel1}%` || '0%';

        resumePdf.querySelector('.skill-item2').textContent = formData['skill-item2'] || '';
        const skillLevel2 = formData['skill-level2'];
        resumePdf.querySelector('.skill-level-inner2').style.width = `${skillLevel2}%` || '0%';
        resumePdf.querySelector('.skill-level-inner2').textContent = `${skillLevel2}%` || '0%';

        const contentContainers = document.querySelectorAll('.container, #branding');
        contentContainers.forEach(container => {
            container.style.display = 'none';
        });

        resumePdf.style.display = 'block';

        const downloadBtn = document.querySelector('.download-btn');
        downloadBtn.style.display = 'block';

        const makeChange = document.querySelector('.changes-btn');
        makeChange.style.display = 'block';

        if(formData.position == ""){
            resumePdf.querySelector('.professional-details').style.display='none';
        }else{
            resumePdf.querySelector('.professional-details').style.display='block';
        }

        if(formData['school-name'] == ""){
            resumePdf.querySelector('.educational-details').style.display='none';
        }else{
            resumePdf.querySelector('.educational-details').style.display='block';
        }
        
        if(formData.address == ""){
            resumePdf.querySelector('.address').style.display='none';
        }else{
            resumePdf.querySelector('.address').style.display='block';
        }

        if(formData['skill-item1'] == ""){
            resumePdf.querySelector('.key-skills').style.display='none';
        }else{
            resumePdf.querySelector('.key-skills').style.display='block';
        }

        if(formData['skill-item2'] == ""){
            resumePdf.querySelector('.skill-item2').style.display='none';
            resumePdf.querySelector('.level2').style.display='none';
        }else{
            resumePdf.querySelector('.skill-item2').style.display='block';
            resumePdf.querySelector('.level2').style.display='block';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var previewButton = document.querySelector('.resume-summary input[type="submit"]');
    previewButton.addEventListener('click', function (event) {
        event.preventDefault();
    });
});

function generatePDF() {
    const element = document.getElementById('resume_pdf');
    html2pdf()
        .from(element)
        .set({
            pagebreak: { mode: 'avoid-all' },
            margin: [10, 10, 10, 10],
            filename: 'resume.pdf',
        })
        .save();
}

function makeChanges() {

    const contentContainers = document.querySelectorAll('.container, #branding');
    contentContainers.forEach(container => {
        container.style.display = 'block';
    });

    const resumePdf = document.getElementById('resume_pdf');
    resumePdf.style.display = 'none';

    const downloadBtn = document.querySelector('.download-btn');
    downloadBtn.style.display = 'none';

    const makeChange = document.querySelector('.changes-btn');
    makeChange.style.display = 'none';
}