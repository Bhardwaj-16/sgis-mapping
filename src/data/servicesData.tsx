import React from 'react';

export interface ServiceData {
  title: string;
  content: React.ReactNode;
}

export const servicesData: Record<string, ServiceData> = {
  'gis-cad-services': {
    title: 'GIS/CAD Services',
    content: (
      <div className="space-y-8 text-on-surface-variant font-body leading-relaxed">
        <section>
          <h2 className="text-2xl font-headline font-bold text-white mb-4">GIS (Geographic Information System) Mapping</h2>
          <p className="mb-4">
            SGIS Mapping Solutions provides GIS Services, GIS Remote Sensing services, GIS Mapping 
            services, and GIS Data conversions Services. Our GIS services allow for the visualization of 
            geographic data, analysis of spatial relationships, and efficient data management. GIS data 
            conversions allow data from different sources to be merged in one common format, which 
            allows for easy access, analysis and utilization.
          </p>
          <p>
            While providing GIS Mapping Services, SGIS Mapping Solutions maintains a commitment to 
            state of-the industry technology, research and innovation, implemented by highly 
            experienced and qualified staff.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-headline font-bold text-white mb-4">GIS Data Conversion</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Conversion of analog data (maps, reports, charts) into a standard GIS format</li>
            <li>Conversion of non-traditional GIS data including satellite imagery, orthophotos and digital terrain data into acceptable tools</li>
            <li>GIS Geodatabase Design, Development, and Management</li>
            <li>Converting outdated file-based GIS systems to highly scalable, high performance and secures Geo-database implementations.</li>
            <li>Support and maintenance services for geodatabases that include periodic enhancements to ensure updated version of the geographic assets to reflect topographic changes in the real world.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-headline font-bold text-white mb-4">Parcel Mapping</h2>
          <p className="mb-4">
            Parcel Mapping involves the creation, updating, and maintenance of cadastral (property 
            boundary) maps using GIS, aerial imagery, survey records, legal descriptions, and land 
            ownership data. The objective is to accurately represent land parcels and their associated 
            attributes in a geospatial database.
          </p>
          <h3 className="text-xl font-headline font-semibold text-white mb-2">Typical Scope of Work</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Digitization of parcel boundaries from cadastral maps, deeds, plats, and survey documents.</li>
            <li>Geo-referencing and rectification of scanned parcel maps.</li>
            <li>Integration of ownership, assessment, and land records with parcel polygons.</li>
            <li>Parcel fabric creation and topology validation.</li>
            <li>Attribution of parcel information such as Parcel ID, owner details, land use, acreage, zoning, and tax assessment data.</li>
            <li>Quality control and quality assurance (QA/QC) to ensure spatial and attribute accuracy.</li>
            <li>Development of web GIS applications for parcel viewing and land records management.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-headline font-bold text-white mb-4">Land use/ Land Cover Mapping</h2>
          <p className="mb-4">
            We acquire landscape for Land management and land planning along with an accurate means 
            of monitoring change over time and provide vital information to any person responsible for 
            land management. Land use and land cover mapping is a process that quantifies current land 
            resources into a series of thematic categories, such as forest, water, and paved surfaces.
          </p>
          <p>
            SGIS Mapping Solutions understands current land cover and how it is being used, along with 
            an accurate means of monitoring change over time and provide vital information to any 
            person responsible for land management. Measuring current conditions and how they are 
            changing can be easily achieved through land cover mapping, a process that quantifies current 
            land resources into a series of thematic categories, such as forest, water, and paved surfaces. 
            We use remotely sensed imagery and semi-automated classification methods to provide cost-effective and accurate means to derive land resource information and maintain its currency 
            into the future.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-headline font-bold text-white mb-4">Digital Elevation model/Digital Surface Model</h2>
          <p>
            Advanced auto correction methods to extract highly accurate Digital elevation model (DEM)
            and Digital surface model (DSM) Deriving 3D models very quickly and affordably, providing 
            maximum exploitation of imagery captured with digital aerial sensors as a basis for ortho
            photography, terrain modelling, planimetric mapping.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-headline font-bold text-white mb-4">Planimetric Mapping</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Capturing planimetric data from aerial photographs and satellite stereo images</li>
            <li>Large scale mapping where the planimetric details are captured from high resolution aerial photographs with high accurate generating precision contour as per the requirement</li>
            <li>Details like transportation, buildings, structures, hydrography, vegetation, boundaries, utilities etc. captured for comprehensive GIS solutions or for individual projects</li>
          </ul>
        </section>
      </div>
    ),
  },
  'lidar-processing': {
    title: 'LiDAR Processing',
    content: (
      <div className="space-y-8 text-on-surface-variant font-body leading-relaxed">
        <ul className="list-disc pl-5 space-y-2">
          <li>Point cloud classification</li>
          <li>Digital Surface Model (DSM)</li>
          <li>Feature extraction</li>
          <li>Contour generation</li>
          <li>Building extraction</li>
          <li>Powerline classification</li>
          <li>PLS – CADD Modelling</li>
        </ul>
      </div>
    ),
  },
  'aerial-triangulation': {
    title: 'Aerial Triangulation',
    content: (
      <div className="space-y-8 text-on-surface-variant font-body leading-relaxed">
        <ul className="list-disc pl-5 space-y-2">
          <li>Triangulating large quantity of aerial images, UAV images and satellite scenes</li>
          <li>Triangulation of images captured from the latest digital cameras and sensors.</li>
          <li>High geometric stability of the blocks with well-defined external orientation and additional parameters meeting the RMSE within tolerance.</li>
          <li>The blocks have high geometric stability with well-defined external orientation and additional parameters that meet the RMSE within tolerance.</li>
        </ul>
      </div>
    ),
  },
  'digital-photogrammetry': {
    title: 'Digital Photogrammetry Mapping',
    content: (
      <div className="space-y-8 text-on-surface-variant font-body leading-relaxed">
        <section>
          <h2 className="text-2xl font-headline font-bold text-white mb-4">3D Planimetric & Features extraction</h2>
          <p className="mb-4">
            With photogrammetric techniques, we can extract all 3d features from the stereo pair images. 
            The x,y,z coordinates and dimensions for all features can be extracted and can be displayed in 
            the CAD formats. This 3D feature extraction helps in urban planning and development.
          </p>
          <p>
            Planimetry is horizontal features on a plane surface without elevation contours to depict the 
            terrain, wherein topographic mapping contour and elevations are vital parts. Our advanced 
            photogrammetry division enables us to capture data from small to large scale stereo models 
            and generate digital topographic maps of high precision. Planimetric maps develops natural 
            features with their exact coordinate locations. These features are comprised of vegetation, 
            trails, fences, utility poles, drainage systems, driveways, road boundaries and curbs.
          </p>
        </section>
      </div>
    ),
  },
  'ortho-processing': {
    title: 'Orthophoto Processing',
    content: (
      <div className="space-y-8 text-on-surface-variant font-body leading-relaxed">
        <ul className="list-disc pl-5 space-y-2">
          <li>Creation of ortho-rectified images from aerial images.</li>
          <li>Processing of satellite images of different sensors</li>
          <li>Radiometric correction, atmospheric correction, image fusion (resolution merge), histogram matching (tonal balancing)</li>
          <li>Ortho-rectification, ortho mosaic, color balancing</li>
          <li>Data cut into easily manageable size tiles for better file</li>
          <li>True orthophoto, ie, geometrically correct over the entire image, instead of being correct only at terrain level</li>
        </ul>
      </div>
    ),
  },
  '3d-modeling': {
    title: '3D Modeling',
    content: (
      <div className="space-y-8 text-on-surface-variant font-body leading-relaxed">
        <p className="mb-4">
          3D Modeling involves the creation of accurate three-dimensional representations of real-world features such as buildings, terrain, infrastructure, and vegetation using aerial imagery, 
          LiDAR, photogrammetry, DSM/DTM, and GIS data. These models support urban planning, 
          engineering, asset management, visualization, and simulation applications.
        </p>
        <h3 className="text-xl font-headline font-semibold text-white mb-2">Typical Scope of Work</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Creation of 3D building models from aerial imagery, LiDAR, DSM, and survey data.</li>
          <li>Extraction of building footprints and roof structures.</li>
          <li>Generation of Level of Detail (LOD1, LOD2, and higher) building models.</li>
          <li>Development of 3D terrain surfaces using DTM and DEM data.</li>
          <li>Integration of GIS attributes with 3D features.</li>
          <li>Quality assurance and validation of geometry, heights, and spatial accuracy.</li>
          <li>Conversion of 3D data into industry-standard formats for visualization and analysis.</li>
        </ul>
      </div>
    ),
  },
  'utility-mapping': {
    title: 'Utility Mapping',
    content: (
      <div className="space-y-8 text-on-surface-variant font-body leading-relaxed">
        <p className="mb-4">
          Utility mapping is critical to safe guarding subsurface construction and activity. Accurately 
          identifying subsurface utilities and other foreign obstructions allows our clients to operate 
          safely and reduce risk. Prior to any subsurface work, a thorough utility-mapping survey should 
          be conducted to identify utilities in the work area. After the utility mapping has been 
          performed, SGIS Mapping Solutions can assemble the recorded data into a Geographic 
          Information System (GIS) format in accordance with client requirements. This information can 
          be used by both the engineers and site construction personnel to stay safe and avoid costly 
          mistakes.
        </p>
        <p className="mb-4">
          Utility mapping services basically deals in the network of electrical, water, gas, sewage & 
          telecom. Utility mapping cover quite a few sections such as system modeling, land base 
          creation, raster to vector map conversion, work order updates and circuit map creation. Top-grade software applications like AutoCAD and MicroStation are used to execute these 
          activities.
        </p>
        <p>
          Our expertise is in mixing the technologies of digital mapping from various sources such as 
          satellite pictures, aerial photographs, existing maps and GPS field data to generate the GIS 
          database.
        </p>
      </div>
    ),
  },
  'gis-mobile-applications': {
    title: 'GIS Mobile Application',
    content: (
      <div className="space-y-8 text-on-surface-variant font-body leading-relaxed">
        <p className="mb-4">
          <strong>GIS Mobile Application Development and Deployment</strong> involves designing, configuring, and 
          implementing mobile GIS solutions that enable field personnel to collect, edit, validate, and 
          synchronize geospatial data in real time. These applications support asset management, land 
          administration, utility mapping, infrastructure inspections, environmental monitoring, and 
          field survey operations.
        </p>
        <h3 className="text-xl font-headline font-semibold text-white mb-2">Typical Scope of Work</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Development and configuration of mobile GIS applications for Android and iOS platforms.</li>
          <li>Integration of GIS datasets, maps, imagery, and feature services for field access.</li>
          <li>Design of data collection forms with validation rules and mandatory fields.</li>
          <li>Online and offline map capabilities for remote field operations.</li>
          <li>GPS-based location tracking and navigation.</li>
          <li>Field data collection, editing, and synchronization with enterprise GIS databases.</li>
          <li>Capture of photographs, attachments, and inspection records linked to GIS features.</li>
          <li>Integration with enterprise systems, asset management systems, and web GIS platforms.</li>
          <li>User acceptance testing, training, and deployment support.</li>
          <li>Quality assurance and performance testing of mobile workflows.</li>
        </ul>
      </div>
    ),
  },
};
